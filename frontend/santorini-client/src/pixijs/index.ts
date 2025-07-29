import { Application } from "pixi.js";
import {
  addBackground,
  addDisplacementEffect,
  setup,
  waterWaves,
} from "./misc/misc";
import { addIsland, cellContainer, mapContainer } from "./islands/islands";
import { SceneManager } from "./scenes/SceneManager.ts";
import { IntroScene } from "./scenes/IntroScene.ts";
// gasp
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import * as PIXI from "pixi.js";
import { GameStarted } from "../states/GameStates.ts";
import { Gameplay } from "./gameplay/Gameplay.ts";
import { displayMessage } from "./gameplay/GameFlow.ts";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

export let gameplay: Gameplay;

/**
 * Initializes the PixiJS app and returns the view (canvas)
 */
export async function createPixiApp(container: HTMLElement): Promise<void> {
  const app = new Application();

  await setup(app, container);
  addBackground(app);
  addDisplacementEffect(app);
  await addIsland(app); // This adds `mapContainer`

  app.ticker.add(() => {
    waterWaves();
  });

  const sceneManager = new SceneManager(app);
  const introScene = new IntroScene(app);
  introScene.on("New Game", () => {
    const c = app.stage.getChildByLabel("mapContainer");
    c!.interactiveChildren = true;
    // Set Zustand store value to true
    GameStarted.getState().setNewGame(true);
    gameplay = new Gameplay(cellContainer);
    sceneManager.popOverlay();
    introScene.destroyScene();
    displayMessage("Player 1: Please place your workers on the board!");
  });
  sceneManager.pushOverlay(introScene);

  // Base size of the isometric map
  const baseWidth = 1216;
  const baseHeight = 608;

  const resize = () => {
    const scale = Math.min(
      container.clientWidth / baseWidth,
      container.clientHeight / baseHeight,
    );

    mapContainer.scale.set(scale - 0.1);

    mapContainer.position.set(
      container.clientWidth / 2 - 70,
      container.clientHeight / 2 - 140,
    );

    sceneManager.resizeScene(mapContainer.x, mapContainer.y);
  };

  //resize(); // Initial resize
  new ResizeObserver(resize).observe(container); // React to container resize

  //const sceneManager = new SceneManager(app);
  //const introScene = new IntroScene(app);
  //introScene.init();
  //app.stage.addChild(introScene);
  //sceneManager.pushOverlay(introScene);

  //return app.canvas;
}
