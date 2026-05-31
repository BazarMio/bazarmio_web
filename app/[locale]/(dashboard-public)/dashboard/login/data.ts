import type { Lang } from "@/lib/types";

export type DashboardLoginPageData = {
  title: string;
  subtitle: string;
  selectCountryLabel: string;
  countryEcuador: string;
  countryUnitedStates: string;
  phoneLabel: string;
  phoneHelper: string;
  invalidPhone: string;
  pinLabel: string;
  pinPlaceholder: string;
  submit: string;
  submitting: string;
  error: string;
  error429: string;
};

export const dashboardLoginData: Record<Lang, DashboardLoginPageData> = {
  en: {
    title: "Dashboard sign in",
    subtitle:
      "Use the phone number and 6-digit PIN from your BazarMio cloud account.",
    selectCountryLabel: "Country",
    countryEcuador: "EC",
    countryUnitedStates: "US",
    phoneLabel: "Phone number",
    phoneHelper: "Enter your number without the country code.",
    invalidPhone: "Invalid phone number for selected country.",
    pinLabel: "6-digit PIN",
    pinPlaceholder: "••••••",
    submit: "Sign in to dashboard",
    submitting: "Signing in...",
    error: "Unable to sign in right now. Please try again.",
    error429: "Too many login attempts. Please wait a moment and try again.",
  },
  es: {
    title: "Iniciar sesion en el dashboard",
    subtitle:
      "Usa el numero de telefono y PIN de 6 digitos de tu cuenta cloud de BazarMio.",
    selectCountryLabel: "Pais",
    countryEcuador: "EC",
    countryUnitedStates: "US",
    phoneLabel: "Numero de telefono",
    phoneHelper: "Ingresa tu numero sin el codigo del pais.",
    invalidPhone: "Numero invalido para el pais seleccionado.",
    pinLabel: "PIN de 6 digitos",
    pinPlaceholder: "••••••",
    submit: "Entrar al dashboard",
    submitting: "Entrando...",
    error: "No pudimos iniciar sesion en este momento. Intentalo otra vez.",
    error429: "Demasiados intentos. Espera un momento e intenta de nuevo.",
  },
};
