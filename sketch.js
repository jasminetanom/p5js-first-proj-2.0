let input, button, greeting;
var bubbles = [];
var blue_sky;
var beach_sounds;
// var is_play_sound = true;

function preload(){
  blue_sky = loadImage("blue-sky.jpg");
  beach_sounds = loadSound('beach-sounds.mp3');
  sound_icon = loadImage("sound-icon.png");

}

// function preload() {
//   img = loadImage("orange-daisy.png");

function setup() {
  // create canvas
  var cnv = createCanvas(750, 500);
  // background(50,180,250,100);
  // var x = (windowWidth - width) / 2;
  // var y = (windowHeight - height) / 2;
  // cnv.position(x, y);

  // var cnv = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  beach_sounds.loop();

  textFont('Libre Baskerville');
  input = createInput();
  // input.position(30, height-90);
  input.position(x + 30, y + height-90);

  button = createButton('release');
  button.position(input.x + input.width + 10, y + height-90);
  button.mouseClicked(release);

  question = createElement('h2', 'what\'s occupying your thoughts?');
  question.position(x + 30, y + height-150);

  textAlign(CENTER);
  textSize(50);

  for (var i = 0; i < 1; i++) {
    bubbles[i] = new Bubble();
  }


}

function release() {
  const thought = input.value();
  // question.html("let your thoughts go and watch them drift by.");

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

  answer_three = createElement('h3', "breathe,");
  answer_three.position(x + 750 - 270, y + 500 - 114);
  answer_one = createElement('h3', "let your thoughts go,");
  answer_one.position(x + 750 - 270, y + 500 - 92);
  answer_two = createElement('h3', "and watch them drift by.");
  answer_two.position(x + 750 - 270, y + 500 - 70);

  var words = thought.split(" ");
  input.value('');


  for (let i = 0; i < words.length; i++) {
    push();

    var word = words[i];
    // text(words[i], 0, 0);
    // fill(0);
    // text(words[i], 0, 0);
    bubbles.push(new Bubble(word));
    // fill(random(255), 255, 255);
    // translate(random(width), random(height));
    // rotate(random(2 * PI));
    bubbles[i].move();
    bubbles[i].display();

    pop();

  }
}

function Bubble(word){

  this.x = random(0, 150);
  this.y = random(30, height - 250);

  this.display = function() {

    stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x+10,this.y+10,24,24);
    ellipse(this.x+30,this.y+10,24,24);
    ellipse(this.x+30,this.y-10,24,24);
    ellipse(this.x+20,this.y-10,24,24);
    ellipse(this.x+40,this.y,24,24);
    fill(0);
    text(word, this.x+20, this.y+8);
    textSize(14);

    // console.log(word)
  }

  this.move = function() {
    this.x = this.x += 0.5 ;
    this.y = this.y + random(-0.5, 0.5);

    // if(this.x >= width){
    //   this.x = 0;
    // }


  }
  // if(mouseIsPressed){
  //   if((mouseX > this.x)&&(mouseX < this.x + 40)){
  //     // stroke(0,0,0,0);
  //     // fill(0,0,0,0);
  //     this.x
  //   }
  // }
  // console.log(word.toString() instanceof String)
  // text(word, 0, 0);
}

function draw() {
  // background(50,180,250,100);

  image(blue_sky, 0, 0, 750, 500);
  fill(62,55,56,(255 * sin(frameCount*0.01) - 150));
  rect(0, 0, 750, 500)
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }

  // image(sound_icon, width-60, height-60, 30, 30);
  //
  // var d = dist(mouseX, mouseY, width-45,height-45);
  //
  // if(d < 20){
  //   cursor(HAND);
  // } else {
  //   cursor(ARROW);
  // }
  //
  //
  // if(is_play_sound){
  //   // is_play_sound ++;
  //   // text("/", width-30, height-30);
  //   beach_sounds.loop();
  // }else{
  //   // is_play_sound ++;
  //   beach_sounds.stop();
  // }

  if(mouseIsPressed){
    textFont('Libre Baskerville')
    fill(255, 255, 255)
    noStroke();
    text("this too, shall pass.", mouseX, mouseY)
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    release();
  }
}
