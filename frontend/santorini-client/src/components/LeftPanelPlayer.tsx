import { GameStarted } from "../states/GameStates.ts";
import { useStore } from "zustand/react";

export const LeftPanelPlayer = () => {
  const newGame = useStore(GameStarted, (state) => state.newGame);
  //const move = () => {};
  return (
    <div
      className={
        "flex flex-col items-center justify-center border-4 border-double border-gray-500 px-8 py-0 rounded-md space-y-4"
      }
    >
      {/* players avatar */}
      <div className="w-36 h-36 overflow-hidden rounded-full">
        <img src="/react-assets/player1.png" alt="User Avatar" />
      </div>
      {/* move */}
      <button
        className="btn btn-outline btn-info hover:scale-105 transition-transform"
        disabled={!newGame}
      >
        Move
      </button>
      {/* build */}
      <button
        className="btn btn-outline btn-info hover:scale-105 transition-transform"
        disabled={!newGame}
      >
        Build
      </button>
      {/* workers */}
      <div className="svg-container flex flex-row items-center justify-center">
        <button
          id={"blue-male"}
          className="p-0 m-0 border-none bg-transparent cursor-pointer"
          aria-label="Blue Male"
        >
          <img
            src="/react-assets/blue-male.svg"
            alt="Blue Male SVG"
            className="w-24 h-24 hover:scale-105 transition-transform"
          />
        </button>

        <button
          id={"blue-female"}
          className="p-0 m-0 border-none bg-transparent cursor-pointer"
          aria-label="Blue Female"
        >
          <img
            src="/react-assets/blue-female.svg"
            alt="Blue Female SVG"
            className="w-24 h-24 hover:scale-105 transition-transform"
          />
        </button>
      </div>
    </div>
  );
};
