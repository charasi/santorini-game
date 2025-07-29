import { type Application, Container } from "pixi.js";

/**
 * Abstract base class for all scenes.
 * Subclasses must implement `init` and `update`.
 */
export abstract class Scene extends Container {
  protected app: Application;

  protected constructor(app: Application) {
    super();
    this.app = app;
    //console.log(this.app.resizeTo)
  }

  /**
   * Called once when scenes is added to stage.
   * Use this to build visuals and event listeners.
   */
  abstract init(): void;

  /**
   * Called every frame. Use `delta` for animations.
   * You can optionally override this.
   */
  update?(delta: number): void;

  /**
   * Called once before scenes is removed from stage.
   * Clean up timers, listeners, textures, etc.
   */
  destroyScene(): void {
    this.removeChildren();
    this.destroy({ children: true });
  }
}
