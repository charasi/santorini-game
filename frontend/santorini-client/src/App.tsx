import { PixiCanvas } from "./components/PixiCanvas.tsx";
import { TopPanel } from "./components/TopPanel.tsx";
import { LeftPanel } from "./components/LeftPanel.tsx";
import { RightPanel } from "./components/RightPanel.tsx";
import { BottomPanel } from "./components/BottomPanel.tsx";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col text-white">
      <TopPanel />

      <div className="flex flex-grow min-h-0">
        <LeftPanel />

        <main className="flex-grow flex items-start justify-center bg-gray-900 overflow-hidden">
          <PixiCanvas />
        </main>

        <RightPanel />
      </div>

      <BottomPanel />
    </div>
  );
}

export default App;
