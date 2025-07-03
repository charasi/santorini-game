// SceneManager.ts
import { Application } from "pixi.js";
import { Scene } from "./Scene";

export class SceneManager {
  private app: Application;
  private currentScene: Scene | null = null;

  constructor(app: Application) {
    this.app = app;
  }

  changeScene(newScene: Scene): void {
    if (this.currentScene) {
      this.app.stage.removeChild(this.currentScene);
      this.app.ticker.remove(this.currentScene.update, this.currentScene);
      this.currentScene.destroyScene();
    }

    this.currentScene = newScene;
    this.app.stage.addChild(this.currentScene);
    this.currentScene.init();
    this.app.ticker.add(this.currentScene.update, this.currentScene);
  }
}
