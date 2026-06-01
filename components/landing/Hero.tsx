import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  SECTION_HERO,
  CONTAINER_MD,
  CONTAINER_LG,
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
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  ctaExternal?: boolean;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  showGooglePlayBadge?: boolean;
  showAppleStoreBadge?: boolean;
  image?: { src: string; alt: string };
  className?: string;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaLink = "#",
  ctaExternal = false,
  ctaSecondaryText,
  ctaSecondaryLink = "#",
  showGooglePlayBadge = false,
  showAppleStoreBadge = false,
  image,
  className,
}: HeroProps) {
  const hasImage = !!image;

  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center",
        hasImage ? "text-center lg:text-left" : "text-center",
        SECTION_HERO,
        className,
      )}
    >
      <div className={cn(hasImage ? CONTAINER_LG : CONTAINER_MD)}>
        <div
          className={cn(
            hasImage ? "grid lg:grid-cols-2 lg:gap-16 items-center" : SPACE_Y_8,
          )}
        >
          {/* Text side */}
          <div className={cn(hasImage ? "flex flex-col gap-8" : SPACE_Y_8)}>
            {eyebrow && (
              <div className={cn(hasImage ? "flex justify-center lg:justify-start" : "flex justify-center")}>
                <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-medium tracking-wide text-lime">
                  {eyebrow}
                </span>
              </div>
            )}

            <h1 className={H1_HERO}>{title}</h1>

            <p className={cn(P_HERO, !hasImage && CONTAINER_SM)}>{subtitle}</p>

            {/* Mobile-only image — sits between subtitle and CTAs */}
            {hasImage && (
              <div className="flex justify-center lg:hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={800}
                  className="w-full max-w-[220px] sm:max-w-[260px] h-auto drop-shadow-2xl"
                  sizes="(max-width: 640px) 220px, 260px"
                  priority
                />
              </div>
            )}

            {(ctaText || ctaSecondaryText) && (
              <div
                className={cn(
                  "flex flex-col sm:flex-row gap-4 items-center",
                  !hasImage ? "justify-center" : "justify-center lg:justify-start",
                )}
              >
                {ctaText && (
                  <Button asChild size="lg" className={BTN_PRIMARY_HERO}>
                    <Link
                      href={ctaLink}
                      {...(ctaExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {ctaText}
                    </Link>
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
              <div className={cn("flex", !hasImage ? "justify-center" : "justify-center lg:justify-start")}>
                <GooglePlayBadge />
              </div>
            )}

            {showAppleStoreBadge && (
              <div className={cn("flex", !hasImage ? "justify-center" : "justify-center lg:justify-start")}>
                <AppleStoreBadge />
              </div>
            )}
          </div>

          {/* Desktop-only image — right column */}
          {hasImage && (
            <div className="hidden lg:flex justify-end">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={800}
                className="w-full max-w-[480px] xl:max-w-[520px] h-auto drop-shadow-2xl"
                sizes="(max-width: 1280px) 480px, 520px"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
