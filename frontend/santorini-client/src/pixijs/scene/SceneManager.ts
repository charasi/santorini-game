// SceneManager.ts
import { Application } from "pixi.js";
import { Scene } from "./Scene";

/**
 * Manages scene overlays on top of the base game stage (e.g. Island).
 */
export class SceneManager {
  private app: Application;
  private overlayStack: Scene[] = [];

  constructor(app: Application) {
    this.app = app;
  }

  /**
   * Adds a scene on top of the current overlays.
   * Calls `init` and registers `update` in ticker if available.
   */
  pushOverlay(scene: Scene): void {
    scene.init();
    this.overlayStack.push(scene);
    this.app.stage.addChild(scene);
  }
  /**
   * Removes the top-most scene.
   * Calls `destroyScene` and deregisters `update` from ticker.
   */
  popOverlay(): void {
    const scene = this.overlayStack.pop();
    if (!scene) return;

    this.app.stage.removeChild(scene);
    if (scene.update) {
      //this.app.ticker.remove(scene.update, scene);
    }
    scene.destroyScene();
  }

  /**
   * Clears all overlays.
   */
  clearOverlays(): void {
    while (this.overlayStack.length > 0) {
      this.popOverlay();
    }
  }

  resizeScene(x: number, y: number): void {
    const l = this.overlayStack.length;
    for (let i = 0; i < l; i++) {
      this.overlayStack[i].position.set(x / 2 + 100, y / 2 + 80);
    }
  }

  /**
   * Gets the current active overlay scene, if needed.
   */
  getCurrentScene(): Scene | null {
    return this.overlayStack.at(-1) || null;
  }
}
