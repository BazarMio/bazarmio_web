"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { nextApi } from "@/lib/apiRoutes";
import { DASHBOARD } from "@/lib/routes";
import type { Lang } from "@/lib/types";
import type { DashboardLoginPageData } from "@/app/[locale]/(dashboard-public)/dashboard/login/data";

type Country = {
  code: "EC" | "US";
  dialCode: string;
  digitCount: number;
  hint: string;
  label: string;
};

type LoginFormProps = {
  locale: Lang;
  data: DashboardLoginPageData;
};

function toE164(input: string, country: Country) {
  const digits = input.trim();

  if (country.code === "EC") {
    if (digits.startsWith("0")) {
      return `${country.dialCode}${digits.slice(1)}`;
    }

    return `${country.dialCode}${digits}`;
  }

  return `${country.dialCode}${digits}`;
}

function validatePhone(input: string, country: Country) {
  if (!input.trim()) {
    return false;
  }

  if (country.code === "EC") {
    if (input.length !== 10) {
      return false;
    }

    if (!input.startsWith("09")) {
      return false;
    }

    const prefix = Number.parseInt(input[2] || "", 10);
    return !Number.isNaN(prefix) && prefix >= 2;
  }

  if (input.length !== 10) {
    return false;
  }

  const firstDigit = Number.parseInt(input[0] || "", 10);
  return !Number.isNaN(firstDigit) && firstDigit >= 2;
}

export function LoginForm({ locale, data }: LoginFormProps) {
  const router = useRouter();
  const countries: Country[] = [
    {
      code: "EC",
      dialCode: "+593",
      digitCount: 10,
      hint: "0991234567",
      label: data.countryEcuador,
    },
    {
      code: "US",
      dialCode: "+1",
      digitCount: 10,
      hint: "2125551234",
      label: data.countryUnitedStates,
    },
  ];

  const [countryCode, setCountryCode] = useState<Country["code"]>("EC");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedCountry =
    countries.find((country) => country.code === countryCode) ?? countries[0];

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!validatePhone(phoneNumber, selectedCountry)) {
      setError(data.invalidPhone);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(nextApi.auth.login(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: toE164(phoneNumber, selectedCountry),
          pin,
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          setError(data.error429);
          return;
        }
        const payload = (await response.json()) as { message?: string };
        setError(payload.message || data.error);
        return;
      }

      router.push(`/${locale}${DASHBOARD}`);
      router.refresh();
    } catch {
      setError(data.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <div className="grid gap-3 sm:grid-cols-[140px_minmax(0,1fr)]">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">
              {data.selectCountryLabel}
            </label>
            <Select
              value={countryCode}
              onValueChange={(value) => {
                setCountryCode(value as Country["code"]);
                setPhoneNumber("");
                setError(null);
              }}
            >
              <SelectTrigger className="h-10 min-h-10 w-full border-white/10 bg-white/5 px-3 py-2 text-sm leading-none text-white hover:bg-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                position="popper"
                side="bottom"
                sideOffset={-2}
                className="border-white/10 bg-[#111111] text-white"
              >
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.label} ({country.dialCode})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-white"
            >
              {data.phoneLabel}
            </label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              inputMode="tel"
              autoComplete="tel"
              maxLength={selectedCountry.digitCount}
              placeholder={selectedCountry.hint}
              value={phoneNumber}
              onChange={(event) =>
                setPhoneNumber(event.target.value.replace(/\D/g, ""))
              }
              className="border-white/10 bg-white/5 text-white placeholder:text-gray-500"
            />
          </div>
        </div>
        <p className="text-xs text-gray-400">
          {data.phoneHelper} {selectedCountry.dialCode} {selectedCountry.hint}
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="pin" className="text-sm font-medium text-white">
          {data.pinLabel}
        </label>
        <Input
          id="pin"
          name="pin"
          type="password"
          inputMode="numeric"
          autoComplete="current-password"
          maxLength={6}
          placeholder={data.pinPlaceholder}
          value={pin}
          onChange={(event) => setPin(event.target.value.replace(/\D/g, ""))}
          className="border-white/10 bg-white/5 text-white placeholder:text-gray-500"
        />
      </div>

      {error ? (
        <div className="flex items-start gap-2.5 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-sm text-red-200">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      ) : null}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? data.submitting : data.submit}
      </Button>
    </form>
  );
}
