import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { Panel } from "./Panel.tsx";

export const LeftPanel = () => {
  //gsap.registerPlugin(GSDevTools);
  //GSDevTools.create();
  return (
    <aside
      className={
        "bg-[url('/assets/white-marble.jpg')] bg-cover bg-center w-64 p-4  overflow-y-auto"
      }
    >
      <Panel />
    </aside>
  );
};
