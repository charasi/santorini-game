import { Scene } from "./Scene.ts";
import { type Application, Container, Sprite } from "pixi.js";
import {
  bgIntroTexture,
  introSceneTexture,
  startTexture,
} from "../misc/misc.ts";
import { Button } from "@pixi/ui";
// gasp
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import * as PIXI from "pixi.js";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

export class IntroScene extends Scene {
  constructor(app: Application) {
    super(app);
  }

  init() {
    this.width = this.app.screen.width / 2;
    this.height = this.app.screen.height / 2;

    // Container to hold intro UI elements
    const introContainer = new Container();
    introContainer.x = -100;
    introContainer.y = -80;

    // Background sprite
    const bgIntroSprite = new Sprite(bgIntroTexture);
    bgIntroSprite.label = "bgIntroSprite";
    bgIntroSprite.width = 550;
    bgIntroSprite.height = 350;
    bgIntroSprite.position.set(-45, 0);

    // Foreground "intro" sprite
    const introSprite = new Sprite(introSceneTexture);
    introSprite.scale.set(0.6);
    introSprite.position.set(-10, 10);

    // Start button
    const startSprite = new Sprite(startTexture);
    startSprite.scale.set(0.45);
    startSprite.position.set(115, 250);

    const startButton = new Button(startSprite);

    startButton.onPress.connect(() => {
      this.emit("New Game");
    });

    // Add elements to intro container
    introContainer.addChild(bgIntroSprite);
    introContainer.addChild(introSprite);
    introContainer.addChild(startButton.view);

    const introAnim = gsap.timeline({
      autoRemoveChildren: true,
    });

    introAnim
      .fromTo(
        bgIntroSprite,
        { alpha: 0 },
        { alpha: 1, duration: 2, ease: "power1.in" },
      )
      .fromTo(
        introSprite,
        { alpha: 0 },
        { alpha: 1, duration: 1, ease: "power1.in" },
      )
      .fromTo(
        startSprite,
        { alpha: 0 },
        { alpha: 1, duration: 1, ease: "power1.in" },
      );

    // Add container to scenes
    this.addChild(introContainer);
  }

  //update(delta) {
  // Animation logic
  //}

  destroyScene() {
    super.destroyScene();
    // additional cleanup if needed
    this.destroy({ children: true });
  }
}
