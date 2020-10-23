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
      let field = [];
      let rez = 30; // distance bewteen dots
      let cols, rows;
      let zoff = 0; // for noise
      let myzoom; // for slider
      let mynoise; // for slider
      let width = window.innerWidth;
      let height = window.innerHeight;

      s.setup = () => {
        s.createCanvas(width, height);
        myzoom = 50;
        mynoise = 0.0003;
      }

      s.draw = () => {
        // each time time through the draw loop,
        // get values, get dots, show dots, get and show lines
        s.clear();

        // noise and resolution
        let inc = mynoise;
        rez = myzoom;
        zoff += inc; // adjust zoff and z in the function to get different effects
        s.getDots(zoff); // function to get values of dots
        // s.showDots(); // function to show dots but shows rects
        s.getLines(); //
      };

      s.getDots = (z) => {
        // send in a zoff for each field
        cols = 1 + s.floor(width / rez); // adding extra colum and row
        rows = 1 + s.floor(height / rez);
        //field = new float[cols][rows];
        for (let i = 0; i < cols; i++) {
          field[i] = [];
          for (let j = 0; j < rows; j++) {
            z += 0.7; // increment the zoff in the field
            field[i][j] = s.noise(z);
            // field[i][j] = floor(random(2));
          }
        }
      };

      s.showDots = () => {
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            //stroke(100,field[i][j]*255,0);
            //strokeWeight(rez*0.4);
            s.noStroke();
            s.fill(100, field[i][j] * 255, 0, 150);
            s.rect(i * rez, j * rez, rez, rez);
          }
        }
      };

      s.getLines = () => {
        for (let i = 0; i < cols - 1; i++) {
          // so it is not off the edge
          for (let j = 0; j < rows - 1; j++) {
            let x = i * rez;
            let y = j * rez;
            let a = s.createVector(x + rez * 0.5, y);
            let b = s.createVector(x + rez, y + rez * 0.5);
            let c = s.createVector(x + rez * 0.5, y + rez);
            let d = s.createVector(x, y + rez * 0.5);
            let state = s.getState(
              s.floor(field[i][j] + 0.5),
              s.floor(field[i + 1][j] + 0.5),
              s.floor(field[i + 1][j + 1] + 0.5),
              s.floor(field[i][j + 1] + 0.5)
            );
            s.stroke(150, 40);
            let sw = s.map(rez, 10, 50, 2, 6);
            s.strokeWeight(sw);
            switch (state) {
              case 1:
                s.myline(c, d);
                break;
              case 2:
                s.myline(b, c);
                break;
              case 3:
                s.myline(b, d);
                break;
              case 4:
                s.myline(a, b);
                break;
              case 5:
                s.myline(a, d);
                s.myline(b, c);
                break;
              case 6:
                s.myline(a, c);
                break;
              case 7:
                s.myline(a, d);
                break;
              case 8:
                s.myline(a, d);
                break;
              case 9:
                s.myline(a, c);
                break;
              case 10:
                s.myline(a, b);
                s.myline(c, d);
                break;
              case 11:
                s.myline(a, b);
                break;
              case 12:
                s.myline(b, d);
                break;
              case 13:
                s.myline(b, c);
                break;
              case 14:
                s.myline(c, d);
                break;
            }
          }
        }
      };

      s.getState = (a, b, c, d) => {
        //for a1,b1,c1,d1 =15

        return a * 8 + b * 4 + c * 2 + d * 1;
      };

      s.myline = (v1, v2) => {
        // rewriting the ine function
        s.line(v1.x, v1.y, v2.x, v2.y);
      };

      // create methods:
      // s.yourMethod = (x, y) => {
      // your method
      // }
    };

    new P5(sketch, "canvas");
  },
};
</script>

<style></style>
