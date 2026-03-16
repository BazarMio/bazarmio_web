import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Logo({ className, size = "md", href = "/" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-auto", // 32px tall → ~84px wide
    md: "h-10 w-auto", // 40px tall → ~105px wide
    lg: "h-12 w-auto", // 48px tall → ~127px wide
  };

  const content = (
    <Image
      src="/logo_dark_cropped.svg"
      alt="BazarMio"
      width={4000}
      height={1518}
      className={cn("select-none", sizeClasses[size], className)}
      priority
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center transition-opacity hover:opacity-80"
        aria-label="BazarMio — Inicio"
      >
        {content}
      </Link>
    );
  }

  return content;
}
