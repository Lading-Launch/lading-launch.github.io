import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationOverlay from "./NavigationOverlay";

const WAVE_DURATION_MS = 2500;

const NavigationHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const prevPathRef = useRef(location.pathname);
  const pendingNavRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="/"]');
      if (link && link.getAttribute("target") !== "_blank") {
        const href = link.getAttribute("href") || "";
        const nextPath = href.split("?")[0].split("#")[0];
        if (nextPath !== location.pathname && nextPath.startsWith("/")) {
          e.preventDefault();
          if (pendingNavRef.current) clearTimeout(pendingNavRef.current);
          setIsNavigating(true);
          pendingNavRef.current = setTimeout(() => {
            pendingNavRef.current = null;
            navigate(href);
            setIsNavigating(false);
          }, WAVE_DURATION_MS);
        }
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      if (pendingNavRef.current) clearTimeout(pendingNavRef.current);
    };
  }, [location.pathname, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  return <NavigationOverlay isVisible={isNavigating} />;
};

export default NavigationHandler;
