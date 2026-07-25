import { useEffect, useState } from "react";

export function useEllipsis(intervalMs = 500, maxDots = 3) {
  const [ellipsis, setEllipsis] = useState(".");
  useEffect(() => {
    const interval = setInterval(
      () => setEllipsis((prev) => (prev.length === maxDots ? "" : prev + ".")),
      intervalMs,
    );
    return () => clearInterval(interval);
  }, []);

  return ellipsis;
}
