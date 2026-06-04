import { LanguageSelector } from "@/components/navigation/LanguageSelector";
import { Logo } from "@/components/ui/logo";
import { DASHBOARD_LOGIN, localePath } from "@/lib/routes";
import type { Lang } from "@/lib/types";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function DashboardPublicLayout({ children, params }: Props) {
  const { locale } = await params;
  const lang = (locale === "es" ? "es" : "en") as Lang;

  return (
    <div className="min-h-screen bg-[--bazarmio-darker] text-white">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0f0f0f]/90 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Logo href={localePath(lang, DASHBOARD_LOGIN)} size="md" />
          <LanguageSelector
            triggerClassName="border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            contentClassName="border-white/10 bg-[#111111] text-white"
          />
        </div>
      </header>
      {children}
    </div>
  );
}
