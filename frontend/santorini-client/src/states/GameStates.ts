import { createStore } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { gameplay } from "../pixijs";
import { displayMessage } from "../pixijs/gameplay/GameFlow.ts";

type GameStartedStore = {
  newGame: boolean;
  setNewGame: (newGame: boolean) => void;
};

export const GameStarted = createStore<GameStartedStore>()((set) => ({
  newGame: false,
  setNewGame: (newGame: boolean) => set({ newGame }),
}));

// turn phase move or build
type TurnPhase = "Move" | "Build" | "Place" | "None";

// game state
type GameState = {
  turnPhase: TurnPhase;
  tileNo: number;
};

// game state actions
type GameStateActions = {
  setTurnPhase: (phase: TurnPhase, player: number) => void;
  setTileNo: (tileNo: number) => void;
};

export type GameStateStore = GameState & GameStateActions;

export const gameStates = createStore<GameStateStore>()(
  subscribeWithSelector((set) => ({
    turnPhase: "None",
    tileNo: 0,

    setTurnPhase: (phase: TurnPhase, player: number) => {
      const currentPlayer = gameplay.currentPlayer;
      if (player !== currentPlayer) {
        displayMessage(
          "Wrong Player! Current Player is Player " + currentPlayer,
        );
        return;
      }
      set({ turnPhase: phase });
    },

    setTileNo: (tileNo) => set({ tileNo: tileNo }),
  })),
);

type Message = {
  message: string;
};

type MessageActions = {
  setMessage: (message: string) => void;
};

type MessageStore = Message & MessageActions;

export const display = createStore<MessageStore>()(
  subscribeWithSelector((set) => ({
    message: "Welcome to Santorini!",
    setMessage: (message: string) => set({ message }),
  })),
);
