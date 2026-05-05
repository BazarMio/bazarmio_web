"use client";

import Image from "next/image";
import Link from "next/link";
import { useSettings } from "@/context/SettingProvider";
import { homeData } from "@/app/data";
import { cn } from "@/lib/utils";

interface GooglePlayBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const badgeSizes: Record<
  NonNullable<GooglePlayBadgeProps["size"]>,
  { width: number; height: number }
> = {
  sm: { width: 160, height: 47 },
  md: { width: 200, height: 59 },
  lg: { width: 240, height: 71 },
};

export function GooglePlayBadge({
  className,
  size = "md",
}: GooglePlayBadgeProps) {
  const { lang } = useSettings();
  const alt = homeData[lang].hero.googlePlayAlt;

  const src =
    lang === "en"
      ? "/badges/GetItOnGooglePlay_Badge_Web_color_English.png"
      : "/badges/GetItOnGooglePlay_Badge_Web_color_Spanish-LATAM.png";

  const { width, height } = badgeSizes[size];

  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.bazarmio.app"
      className={cn("inline-block", className)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={false}
      />
    </Link>
  );
}
