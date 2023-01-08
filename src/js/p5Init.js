const p5 = require("p5");
let isLoaded = false;
let glitch;
let playful;
import imgSrc from "../img/main_title.png";
import Glitch from "./glitch";

function initP5(p) {
  p.setup = function () {
    const canvas = p.createCanvas(1000, 500);
    canvas.parent("p5-canvas");
    p.background(0);

    p.loadImage(imgSrc, function (img) {
      glitch = new Glitch(img, p);
      isLoaded = true;
    });
  };

  p.draw = function () {
    p.clear();
    p.background(0);
    if (isLoaded) {
      glitch.show();
    }
  };
}

const app = new p5(initP5, document.body);
