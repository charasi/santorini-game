import { type Application, Container } from "pixi.js";

/**
 * Base class for class related scenes
 */
export abstract class Scene extends Container {
  protected app: Application;

  constructor(app: Application) {
    super();
    this.app = app;
    console.log(this.app.resizeTo)
  }

  abstract init(): void;
  // abstract update(delta: number): void;


  destroyScene(): void {
    this.removeChildren();
  }
}
