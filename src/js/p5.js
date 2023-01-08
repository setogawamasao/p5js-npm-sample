const p5 = require("p5");
let isLoaded = false;
let glitch;
let playful;
import imgSrc from "../img/sample.png";
import Glitch from "./glitch";

function initP5(p) {
  p.setup = function () {
    const canvas = p.createCanvas(500, 500);
    canvas.parent("p5-canvas");
    p.background(0);
    // playful = p.loadImage(img); //画像を読み込む
    p.loadImage(imgSrc, function (img) {
      glitch = new Glitch(img, p);
      isLoaded = true;
    });
  };

  p.draw = function () {
    p.clear();
    //p.background(0);
    // p.image(playful, 0, 0);
    // p.ellipse(250, 250, 80, 80);
    if (isLoaded) {
      glitch.show();
    }
  };
}

const app = new p5(initP5, document.body);
