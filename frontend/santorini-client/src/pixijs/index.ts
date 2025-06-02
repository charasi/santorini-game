import { Application } from "pixi.js";
import {
  addBackground,
  addDisplacementEffect,
  setup,
  waterWaves,
} from "./misc/misc";
import { addIsland, mapContainer } from "./islands/islands";

/**
 * Initializes the PixiJS app and returns the view (canvas).
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
  };

  //resize(); // Initial resize
  new ResizeObserver(resize).observe(container); // React to container resize

  return app.canvas;
}
