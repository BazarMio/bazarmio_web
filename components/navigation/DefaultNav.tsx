"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./LanguageSelector";
import { cn } from "@/lib/utils";
import { NAV_CONTAINER, NAV_LINK, NAV_LINK_MOBILE } from "@/lib/theme";

interface NavLink {
  href: string;
  label: string;
}

interface DefaultNavProps {
  navLinks: NavLink[];
  homeHref: string;
}

export function DefaultNav({ navLinks, homeHref }: DefaultNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#1a1a1a]/95 backdrop-blur-md">
        <div className={NAV_CONTAINER}>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <Logo size="sm" href={homeHref} />
            </div>

            {/* Desktop: Pill nav */}
            <div className="hidden md:flex items-center justify-center flex-1 px-8">
              <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        NAV_LINK,
                        isActive
                          ? "text-lime"
                          : "text-gray-400 hover:text-white",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Desktop: Language selector */}
            <div className="hidden md:flex items-center shrink-0">
              <LanguageSelector />
            </div>

            {/* Mobile: Hamburger only */}
            <div className="flex md:hidden items-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-gray-400 hover:text-white hover:bg-white/10"
                aria-label="Toggle menu"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-[#1a1a1a] transition-all duration-300 md:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Overlay header */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-white/5 shrink-0">
          <Logo size="sm" href={homeHref} />
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-gray-400 hover:text-white hover:bg-white/10"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Overlay links — centered vertically */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  NAV_LINK_MOBILE,
                  isActive ? "text-lime" : "text-gray-300 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Overlay footer — language selector */}
        <div className="flex items-center justify-center px-4 py-8 border-t border-white/5 shrink-0">
          <LanguageSelector />
        </div>
      </div>
    </>
  );
}
