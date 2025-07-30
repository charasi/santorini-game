import { useEffect, useRef } from "react";
import { createPixiApp } from "../pixijs";

/**
 * PixiCanvas creates and renders a PixiJS application
 * inside a React-managed DOM container using a `ref`. It ensures that the PixiJS
 * app is only initialized once, and cleans up its canvas on component unmount
 *
 * @component
 *   An outer container with a maximum size, rounded corners, shadow, and border styling.
 *    An inner container (`div`) where the PixiJS canvas will be injected and rendered.
 * @returns {JSX.Element} A styled div that contains the PixiJS canvas.
 *
 */
export const PixiCanvas = () => {
  // Uses useRef to track the DOM container for PixiJS (`containerRef`).
  const containerRef = useRef<HTMLDivElement>(null);
  // Prevents double initialization (strict mode) using `appInitialized` flag
  const appInitialized = useRef(false);

  useEffect(() => {
    if (appInitialized.current) return;
    appInitialized.current = true;

    (async () => {
      if (containerRef.current) {
        // Initializes the PixiJS app asynchronously using the `createPixiApp` function
        await createPixiApp(containerRef.current);
      }
    })();

    return () => {
      // Ensures proper cleanup by removing the PixiJS
      // canvas from the DOM when the component unmounts
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
