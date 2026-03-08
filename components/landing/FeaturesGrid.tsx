import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  LucideIcon
} from "lucide-react";
import { SECTION, CONTAINER_LG, SECTION_HEADER_MARGIN, CONTAINER_SM, GRID_FEATURES, CARD_DARK_INTERACTIVE, H2, P_SUBTITLE } from "@/lib/theme";

const iconMap: Record<string, LucideIcon> = {
  "package": Package,
  "clipboard-list": ClipboardList,
  "shopping-cart": ShoppingCart,
  "clock": Clock,
  "chart-bar": ChartBar,
  "refresh": RefreshCw,
  "alert-triangle": AlertTriangle,
  "zap": Zap,
  "wifi-off": WifiOff,
};

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeaturesGridProps {
  title?: string;
  subtitle?: string;
  features: readonly Feature[];
}

export function FeaturesGrid({ title, subtitle, features }: FeaturesGridProps) {
  return (
    <section className={SECTION}>
      <div className={CONTAINER_LG}>
        {(title || subtitle) && (
          <div className={`text-center ${SECTION_HEADER_MARGIN}`}>
            {title && (
              <h2 className={`${H2} mb-4`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`${P_SUBTITLE} ${CONTAINER_SM}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className={GRID_FEATURES}>
          {features.map((feature, index) => {
            const Icon = feature.icon ? iconMap[feature.icon] : Package;
            
            return (
              <Card 
                key={index}
                className={`${CARD_DARK_INTERACTIVE} group`}
              >
                <CardHeader>
                  <div className="w-12 h-12 mb-4 rounded-lg bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-lime" />}
                  </div>
                  <CardTitle className="text-xl text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
