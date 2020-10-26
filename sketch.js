//Image Shuffler v2
//Kuleshov Effect
//Based on Big Tex

var scene = 1;

// Countdown timer variables
var timerTitle;
var timerRotate;
var countdown;
var timer;
var state;

var Kuleshov = 'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex5.jpg';
var names = [
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex1.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex2.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex3.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex4.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex6.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex7.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex8.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex9.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex10.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex11.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex12.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex13.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex14.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER2-Kuleshov-Shuffler/main/data/big-tex15.jpg',
];

var i;
var posX;
var posY;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#000000');

  savedTime = millis();

  pixelDensity(displayDensity());
  //frameRate(2);
  
  // Generate first image
  i = int(random(12));

  // Countdown timer setup
  timerTitle = 3000;
  timerRotate = 1000;
  timer = millis() + timerTitle;
  state = 0;
  
  // Typography (Totally optional)
  textAlign(LEFT);
  textFont('Helvetica');
  textSize(16);
  
  posX = (width / 2 - 200);
  posY = (height / 2 - 150);
}

function draw() {

  //Titles
  if (scene == 1) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Experiment 2: Kuleshov Effect", width / 2, height / 2 - 10);
    text("Chris Ware 'Big Tex'", width / 2, height / 2 + 10);
    
    // Timer
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {} else if (state == 1) {
      background(0);
      scene = 2;
      state = 0;
    }
    if (timer < millis()) {
      timer = millis() + timerRotate;
      state = 1;
    }
  }

  //Main image
  if (scene == 2) {
    background('#333333');
    
    main = createImg(Kuleshov, "");
    image(main, posX, posY, 400, 300);
    main.hide();
    
    // Frame counter
    noStroke();
    fill(0);
    rect(posX, posY - 1, 90, 20);
    fill('#ff8800');
    textAlign(LEFT, TOP);
    text("Main " + (i + 1), posX + 10, posY + 1);

    // Timer
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {} else if (state == 1) {
      background(0);
      scene = 3;
      state = 0;
    }
    if (timer < millis()) {
      timer = millis() + timerRotate;
      state = 1;
    }
  }

  //Image shuffler
  if (scene == 3) {
    background('#333333');

    //Loading image
    img = createImg(names[i], "");
    image(img, posX, posY, 400, 300);
    img.hide();

    // Frame counter
    noStroke();
    fill(0);
    rect(posX, posY - 1, 90, 20);
    fill('#ff8800');
    textAlign(LEFT, TOP);
    text("Frame " + (i + 1), posX + 10, posY + 1);

    // Timer
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {} else if (state == 1) {

      //Generate new frames    
      var j = int(random(12));
      // Check for repetition
      while (j == i) {
        j = int(random(11));
      }
      i = j;

      scene = 2;
      state = 0;
    }
    if (timer < millis()) {
      timer = millis() + timerRotate;
      state = 1;
    }
  }
}