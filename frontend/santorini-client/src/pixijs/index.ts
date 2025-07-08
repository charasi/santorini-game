import { Application } from "pixi.js";
import {
  addBackground,
  addDisplacementEffect,
  setup,
  waterWaves,
} from "./misc/misc";
import { addIsland, mapContainer } from "./islands/islands";
import { SceneManager } from "./scene/SceneManager.ts";
import { IntroScene } from "./scene/IntroScene.ts";
// gasp
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import * as PIXI from "pixi.js";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

/**
 * Initializes the PixiJS app and returns the view (canvas)
 */
export async function createPixiApp(
  container: HTMLElement,
): Promise<HTMLCanvasElement> {
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
    sceneManager.popOverlay();
    introScene.destroyScene();
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

  return app.canvas;
}
