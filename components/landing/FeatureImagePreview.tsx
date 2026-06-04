"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";

interface FeatureImagePreviewProps {
  src: string;
  alt: string;
}

export function FeatureImagePreview({ src, alt }: FeatureImagePreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-24 md:w-44 shrink-0 pr-2 pb-2 md:pr-4 md:pb-4 flex items-start justify-center">
        <div
          className="relative w-full overflow-hidden rounded-xl cursor-zoom-in group/img"
          onClick={() => setOpen(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={176}
            height={381}
            className="w-full h-auto"
          />
          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/img:opacity-100 transition-opacity">
            <ZoomIn className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setOpen(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={390}
              height={844}
              className="max-h-[65vh] max-w-70 w-auto h-auto rounded-2xl shadow-2xl"
            />
            <button
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setOpen(false)}
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
