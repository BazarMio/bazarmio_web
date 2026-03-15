"use client";

import Image from "next/image";
import Link from "next/link";
import { useSettings } from "@/context/SettingProvider";
import { homeData } from "@/app/data";
import { cn } from "@/lib/utils";

interface AppleStoreBadgeProps {
  className?: string;
}

export function AppleStoreBadge({ className }: AppleStoreBadgeProps) {
  const { lang } = useSettings();
  const alt = homeData[lang].hero.appleStoreAlt;

  const src =
    lang === "en"
      ? "/badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
      : "/badges/Download_on_the_App_Store_Badge_ES_RGB_blk_100217.svg";

  return (
    <Link href="#" className={cn("inline-block", className)}>
      <Image src={src} alt={alt} width={200} height={59} priority={false} />
    </Link>
  );
}
