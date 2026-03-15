"use client";

import Image from "next/image";
import Link from "next/link";
import { useSettings } from "@/context/SettingProvider";
import { homeData } from "@/app/data";
import { cn } from "@/lib/utils";

interface GooglePlayBadgeProps {
  className?: string;
}

export function GooglePlayBadge({ className }: GooglePlayBadgeProps) {
  const { lang } = useSettings();
  const alt = homeData[lang].hero.googlePlayAlt;

  const src =
    lang === "en"
      ? "/badges/GetItOnGooglePlay_Badge_Web_color_English.png"
      : "/badges/GetItOnGooglePlay_Badge_Web_color_Spanish-LATAM.png";

  return (
    <Link href="#" className={cn("inline-block", className)}>
      <Image src={src} alt={alt} width={200} height={59} priority={false} />
    </Link>
  );
}
