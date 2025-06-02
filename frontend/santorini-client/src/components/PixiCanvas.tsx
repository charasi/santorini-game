import { useEffect, useRef } from "react";
import { createPixiApp } from "../pixijs";

export const PixiCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appInitialized = useRef(false);

  useEffect(() => {
    if (appInitialized.current) return;
    appInitialized.current = true;

    (async () => {
      if (containerRef.current) {
        await createPixiApp(containerRef.current);
      }
    })();

    return () => {
      if (containerRef.current && containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
    };
  }, []);

  return (
    <div className="w-full h-full max-w-[1000px] max-h-[calc(100vh-64px-80px)] rounded-2xl overflow-hidden shadow-lg border border-gray-700">
      <div ref={containerRef} className="w-full h-full bg-black" />
    </div>
  );
};
