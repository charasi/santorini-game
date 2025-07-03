import { Scene } from "./Scene.ts";
import {type Application, Container, Sprite} from "pixi.js";
import {introSceneTexture} from "../misc/misc.ts";

class IntroScene extends Scene {
  constructor(app: Application) {
    super(app);
  }

  // Set up intro visuals
  init() {
    // create new container
    const introScene = new Container();
    introScene.height = this.app.stage.height / 2;
    introScene.width = this.app.stage.width / 2;
    // create sprite
    const introSprite = new Sprite(introSceneTexture);
    introScene.addChild(introSprite);
  }

  //update(delta) {
    // Animation logic
  //}

  destroyScene() {
    super.destroyScene();
    // additional cleanup if needed
  }
}
