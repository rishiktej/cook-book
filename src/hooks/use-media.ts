import { useState, useEffect, useCallback } from "react";

type MediaState = "mobile" | "tablet" | "desktop";

export default function useMedia(tablet: number, desktop: number): MediaState {
  const [state, setState] = useState<MediaState>("desktop");

  const checkWidth = useCallback(() => {
    const width = window.innerWidth;
    if (width > desktop) {
      setState("desktop");
    } else if (width > tablet) {
      setState("tablet");
    } else {
      setState("mobile");
    }
  }, [tablet, desktop]);

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [checkWidth]);

  return state;
}
