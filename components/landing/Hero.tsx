import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  SECTION_HERO,
  CONTAINER_MD,
  SPACE_Y_8,
  CONTAINER_SM,
  BTN_PRIMARY_HERO,
  BTN_SECONDARY_HERO,
  H1_HERO,
  P_HERO,
} from "@/lib/theme";
import { GooglePlayBadge } from "@/components/landing/badges/GooglePlayBadge";
import { AppleStoreBadge } from "./badges/AppleStoreBadge";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  showGooglePlayBadge?: boolean;
  showAppleStoreBadge?: boolean;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink = "#",
  ctaSecondaryText,
  ctaSecondaryLink = "#",
  showGooglePlayBadge = false,
  showAppleStoreBadge = false,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center text-center",
        SECTION_HERO,
        className,
      )}
    >
      <div className={cn(CONTAINER_MD, SPACE_Y_8)}>
        <h1 className={H1_HERO}>{title}</h1>

        <p className={cn(P_HERO, CONTAINER_SM)}>{subtitle}</p>

        {(ctaText || ctaSecondaryText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {ctaText && (
              <Button asChild size="lg" className={BTN_PRIMARY_HERO}>
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            )}

            {ctaSecondaryText && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className={BTN_SECONDARY_HERO}
              >
                <Link href={ctaSecondaryLink}>{ctaSecondaryText}</Link>
              </Button>
            )}
          </div>
        )}

        {showGooglePlayBadge && (
          <div className="flex justify-center pt-2">
            <GooglePlayBadge />
          </div>
        )}

        {showAppleStoreBadge && (
          <div className="flex justify-center pt-2">
            <AppleStoreBadge />
          </div>
        )}
      </div>
    </section>
  );
}
