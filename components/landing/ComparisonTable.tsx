import React from "react";
import { CheckCircle2, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  SECTION,
  CONTAINER_LG,
  SECTION_HEADER_MARGIN,
  CONTAINER_SM,
  H2,
  H4,
  H6,
  P_SUBTITLE,
} from "@/lib/theme";
import {
  ComparisonData,
  ComparisonRow,
  ComparisonSection,
} from "@/app/[locale]/(marketing)/features/data";

interface ComparisonTableProps {
  data: ComparisonData;
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return (
      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-bazarmio-lime/10 text-lime font-semibold text-sm tabular-nums">
        {value}
      </span>
    );
  }
  if (value) {
    return (
      <CheckCircle2
        className="w-5 h-5 text-lime mx-auto"
        aria-label="Included"
      />
    );
  }
  return (
    <Minus
      className="w-5 h-5 text-muted-foreground mx-auto"
      aria-label="Not included"
    />
  );
}

export function ComparisonTable({ data }: ComparisonTableProps) {
  return (
    <section className={SECTION} aria-label="Feature comparison table">
      <div className={CONTAINER_LG}>
        <div className={`text-center ${SECTION_HEADER_MARGIN}`}>
          <h2 className={`${H2} mb-4`}>{data.title}</h2>
          <p className={`${P_SUBTITLE} ${CONTAINER_SM}`}>{data.subtitle}</p>
        </div>

        <Card className="overflow-hidden border-bazarmio-gray bg-[--bazarmio-darker]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="border-b border-bazarmio-gray">
                  <th
                    scope="col"
                    className={`${H4} py-4 px-5 text-left text-white font-semibold w-full`}
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className={`${H4} py-4 px-5 text-center text-white font-semibold min-w-24`}
                  >
                    {data.freeTier}
                  </th>
                  <th
                    scope="col"
                    className={`${H4} py-4 px-5 text-center text-white font-semibold min-w-24`}
                  >
                    {data.proTier}
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.sections.map((section: ComparisonSection, si: number) => (
                  <React.Fragment key={`section-${si}`}>
                    {/* Section header row */}
                    <tr className="border-t border-bazarmio-gray bg-bazarmio-gray/20">
                      <td colSpan={3} className={`${H6} px-5 py-2.5`}>
                        {section.title}
                      </td>
                    </tr>

                    {/* Feature rows */}
                    {section.rows.map((row: ComparisonRow, ri: number) => (
                      <tr
                        key={`row-${si}-${ri}`}
                        className="border-t border-bazarmio-gray/40 hover:bg-bazarmio-gray/10 transition-colors"
                      >
                        <td className="py-3.5 px-5 text-gray-300">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-5 text-center">
                          <CellValue value={row.free} />
                        </td>
                        <td className="py-3.5 px-5 text-center">
                          <CellValue value={row.pro} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}
