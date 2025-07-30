import { LeftPanelPlayer } from "./LeftPanelPlayer.tsx";

export const LeftPanel = () => {
  return (
    <aside
      className={
        "bg-[url('/assets/white-marble.jpg')] bg-cover bg-center w-64 p-4 overflow-y-auto"
      }
    >
      <LeftPanelPlayer />
    </aside>
  );
};
