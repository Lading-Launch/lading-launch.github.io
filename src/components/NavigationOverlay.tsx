import { useEffect, useState } from "react";
import { Anchor } from "lucide-react";

interface NavigationOverlayProps {
  isVisible: boolean;
}

const NavigationOverlay = ({ isVisible }: NavigationOverlayProps) => {
  const [isRising, setIsRising] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsRising(false);
      return;
    }
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsRising(true));
    });
    return () => cancelAnimationFrame(id);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="wave-interstitial fixed inset-0 z-[100] overflow-visible pointer-events-none"
      aria-live="polite"
      aria-hidden="true"
    >
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
            {/* Rounded U waves meeting at crests – smooth cubic bézier */}
            <path d="M 0,1 L 1,1 L 1,0.02
              C 0.94,0.02 0.90,0.08 0.84,0.08
              C 0.78,0.08 0.74,0.02 0.66,0.02
              C 0.60,0.02 0.56,0.08 0.50,0.08
              C 0.44,0.08 0.40,0.02 0.32,0.02
              C 0.26,0.02 0.22,0.08 0.16,0.08
              C 0.10,0.08 0.06,0.02 0,0.04 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className={`wave-interstitial-panel ${isRising ? "rise" : ""}`} />
      {/* Anchor + text fixed center – reveal as water rises */}
      <div
        className={`wave-interstitial-content ${isRising ? "reveal" : ""}`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <div className="wave-interstitial-icon">
          <svg
            className="w-28 h-28 text-[#e8dcb8]"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="32" cy="32" r="26" opacity="0.7" />
          </svg>
          <Anchor className="h-12 w-12 text-[#e8dcb8] absolute" strokeWidth={2} />
        </div>
        <p className="text-[#e8dcb8] font-medium tracking-[0.3em] uppercase text-sm">
          Charting course...
        </p>
        <div className="flex gap-3">
          <span className="h-1.5 w-1.5 rounded-full border border-[#e8dcb8]/80 bg-transparent" />
          <span className="h-1.5 w-1.5 rounded-full border border-[#e8dcb8]/80 bg-transparent" />
          <span className="h-1.5 w-1.5 rounded-full border border-[#e8dcb8]/80 bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default NavigationOverlay;
