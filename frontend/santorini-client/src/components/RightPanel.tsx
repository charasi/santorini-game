import { RightPanelPlayer } from "./RightPanelPlayer.tsx";

export const RightPanel = () => {
  return (
    <aside
      className={
        "bg-[url('/assets/white-marble.jpg')] bg-cover bg-center w-64 p-4 overflow-y-auto"
      }
    >
      <RightPanelPlayer />
    </aside>
  );
};
