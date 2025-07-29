import { display, gameStates } from "../../states/GameStates.ts";

export const gameFlow = () => {
  gameStates.subscribe(
    (state) => state.activePlayer,
    () => {
      console.log("Now it's player");
    },
  );

  gameStates.subscribe(
    (state) => state.tileNo,
    (tileNo) => {
      console.log(tileNo);
    },
  );
};

export const displayMessage = (message: string) => {
  display.getState().setMessage(message);
};
