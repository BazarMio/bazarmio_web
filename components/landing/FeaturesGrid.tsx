import { Card } from "@/components/ui/card";
import { FeatureImagePreview } from "@/components/landing/FeatureImagePreview";
import {
  Package,
  ClipboardList,
  ShoppingCart,
  Clock,
  ChartBar,
  RefreshCw,
  AlertTriangle,
  Zap,
  WifiOff,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SECTION,
  CONTAINER_LG,
  SECTION_HEADER_MARGIN,
  CONTAINER_SM,
  GRID_FEATURES,
  CARD_DARK_INTERACTIVE,
  H2,
  P_SUBTITLE,
} from "@/lib/theme";

const iconMap: Record<string, LucideIcon> = {
  package: Package,
  "clipboard-list": ClipboardList,
  "shopping-cart": ShoppingCart,
  clock: Clock,
  "chart-bar": ChartBar,
  refresh: RefreshCw,
  "alert-triangle": AlertTriangle,
  zap: Zap,
  "wifi-off": WifiOff,
};

interface Feature {
  title: string;
  description: string;
  icon?: string;
  image?: { src: string; alt: string };
}

interface FeaturesGridProps {
  title?: string;
  subtitle?: string;
  features: readonly Feature[];
}

export function FeaturesGrid({ title, subtitle, features }: FeaturesGridProps) {
  const showcase = features.some((f) => !!f.image);

  return (
    <section className={SECTION}>
      <div className={CONTAINER_LG}>
        {(title || subtitle) && (
          <div className={`text-center ${SECTION_HEADER_MARGIN}`}>
            {title && <h2 className={`${H2} mb-4`}>{title}</h2>}
            {subtitle && (
              <p className={`${P_SUBTITLE} ${CONTAINER_SM}`}>{subtitle}</p>
            )}
          </div>
        )}

        <div
          className={cn(
            showcase
              ? "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              : GRID_FEATURES,
          )}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon ? iconMap[feature.icon] : Package;

            if (showcase) {
              return (
                <Card
                  key={index}
                  className={cn(
                    CARD_DARK_INTERACTIVE,
                    "group relative overflow-hidden flex flex-row h-40 md:h-64",
                  )}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="flex flex-col justify-center gap-2 lg:gap-3 p-4 lg:p-6 flex-1 min-w-0">
                    <div className="flex items-center gap-2 lg:flex-col lg:items-start">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-lime/10 flex items-center justify-center group-hover:bg-lime/15 transition-colors flex-shrink-0">
                        {Icon && <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-lime" />}
                      </div>
                      <h3 className="text-sm md:text-base font-semibold text-white lg:mt-3">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {feature.image && (
                    <FeatureImagePreview
                      src={feature.image.src}
                      alt={feature.image.alt}
                    />
                  )}
                </Card>
              );
            }

            // Home page compact card (no images)
            return (
              <Card
                key={index}
                className={`${CARD_DARK_INTERACTIVE} group relative overflow-hidden`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center group-hover:bg-lime/15 transition-colors">
                    {Icon && <Icon className="w-5 h-5 text-lime" />}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
