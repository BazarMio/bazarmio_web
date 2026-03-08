import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Logo({ className, size = "md", href = "/" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl lg:text-5xl"
  };

  const content = (
    <div className={cn(
      "font-bold tracking-tight select-none",
      sizeClasses[size],
      className
    )}>
      <span className="text-white">Bazar</span>
      <span className="relative">
        <span className="text-white">mio</span>
        <span 
          className="absolute -bottom-1 left-0 right-0 h-1 bg-lime rounded-full"
          aria-hidden="true"
        />
      </span>
    </div>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className="inline-flex items-center transition-opacity hover:opacity-80"
        aria-label="Bazarmio Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
