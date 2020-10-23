<template>
  <div id="canvas"></div>
</template>

<script>
import P5 from "p5";

export default {
  name: "HeroAnimation",
  methods: {},
  created() {
    const sketch = (s) => {
      let width = window.innerWidth;
      let height = window.innerHeight;

      s.setup = () => {
        s.createCanvas(width, height);
        s.stroke(255, 50);
      };

      let endPosOffset = 800;
      let startX = [0, 0, 100];
      let startY = -800;
      let endY = height;
      let speed = [0.0002, 0.0005];
      let angles = [0, 10];
      let verticals = [500, 700];
      let horizontals = [560, width];
      let opacity = [20, 60];

      let horizList = [];
      let verticList = [];
      let speedList = [];
      let startPosList = [];
      let endPosList = [];
      let angleList = [];
      let opacityList = [];
      let colorList = [];

      for (let i = 0; i < 100; i++) {
        startPosList.push(startX[0] + s.random(startX[1], startX[2]));
        endPosList.push(startPosList[i] + endPosOffset);
        angleList.push(s.random(angles[0], angles[1]));
        speedList.push(s.random(speed[0], speed[1]));
        verticList.push(s.random(verticals[0], verticals[1]));
        horizList.push(s.random(horizontals[0], horizontals[1]));
        opacityList.push(s.random(opacity[0], opacity[1]));
        colorList.push([s.random(0, 255), s.random(0, 255), s.random(0, 255)]);
      }

      s.draw = () => {
        s.clear();
        for (let i = 0; i < startPosList.length; i++) {
          s.stroke(255, opacityList[i]);
        //   if (
        //     s.mouseX > startPosList[i] + horizList[i] * s.cos(angleList[i]) &&
        //     s.mouseX < endPosList[i] + horizList[i] * s.cos(angleList[i]) &&
        //     s.mouseY > startY + verticList[i] * s.sin(angleList[i]) &&
        //     s.mouseY < endY + verticList[i] * s.sin(angleList[i]))
        //     {
        //     s.stroke(255);
        //   }
          s.line(
            startPosList[i] + horizList[i] * s.cos(angleList[i]),
            startY + verticList[i] * s.sin(angleList[i]),
            endPosList[i] + horizList[i] * s.cos(angleList[i]),
            endY + verticList[i] * s.sin(angleList[i])
          );
          angleList[i] = angleList[i] + speedList[i];
        //   s.stroke(colorList[i][0], colorList[i][1], colorList[i][2]);
          s.fill(colorList[i][0], colorList[i][1], colorList[i][2]);
          s.ellipse(
            endPosList[i] + horizList[i] * s.cos(angleList[i]),
            endY + verticList[i] * s.sin(angleList[i]),
            2,
            2
          );
        }
      };
    };

    new P5(sketch, "canvas");
  },
};
</script>

<style scoped></style>
