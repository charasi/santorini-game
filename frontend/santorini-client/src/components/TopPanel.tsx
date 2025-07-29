import { useStore } from "zustand/react";
import { display } from "../states/GameStates.ts";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

export const TopPanel = () => {
  const message = useStore(display, (msg) => msg.message);
  const displayRef = useRef(null);

  useGSAP(
    () => {
      if (!displayRef.current) return;
      document.fonts.ready.then(() => {
        const splitMessage = SplitText.create(displayRef.current, {
          type: "chars",
        });
        gsap.from(splitMessage.chars, {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    },
    { dependencies: [message], scope: displayRef },
  );
  return (
    <header
      className={"bg-[url('/assets/white-marble.jpg')] bg-cover bg-center"}
    >
      <div
        className={
          "flex items-center justify-center border-4 border-double border-gray-500 px-4 py-2 rounded-md"
        }
      >
        <h1 className={"font-greek text-2xl font-bold text-gray-700 "}>
          Santorini
        </h1>
      </div>
      <div
        className={
          "relative left-1/2 -translate-x-1/2 w-[75%] rounded-b-[16px] " +
          "border border-double border-gray-500 border-t-0 rounded-md text-center py-1"
        }
      >
        <p
          ref={displayRef}
          className={" font-greek text-4xl font-bold text-gray-700 "}
        >
          {message}
        </p>
      </div>
    </header>
  );
};
