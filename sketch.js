function preload(){
  // put preload code here
}
var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();
}

function draw() {
  background(0);
  fill(random(255), random(255), random(255),200);
noStroke();

var myText = 'Disco Karaoke';
textFont('Pattaya');
textAlign(CENTER);
textSize(60);
text(myText, windowWidth/2, windowHeight/2);
var myText = 'Sing your favourite song!';
textFont('Pattaya');
textAlign(CENTER);
textSize(30);
text(myText, windowWidth/2, windowHeight/8*4.5);
  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  ellipse(windowWidth/8,windowHeight/4,random(vol * 1000));
  ellipse(windowWidth/8*2,windowHeight/4,random(vol * 1000));
    ellipse(windowWidth/8*3,windowHeight/4,random(vol * 1000));
      ellipse(windowWidth/8*4,windowHeight/4,random(vol * 1000));
        ellipse(windowWidth/8*5,windowHeight/4,random(vol * 1000));
          ellipse(windowWidth/8*6,windowHeight/4,random(vol * 1000));
ellipse(windowWidth/8*7,windowHeight/4,random(vol * 1000));

ellipse(windowWidth/8,windowHeight/4*3,random(vol * 1000));
ellipse(windowWidth/8*2,windowHeight/4*3,random(vol * 1000));
  ellipse(windowWidth/8*3,windowHeight/4*3,random(vol * 1000));
    ellipse(windowWidth/8*4,windowHeight/4*3,random(vol * 1000));
      ellipse(windowWidth/8*5,windowHeight/4*3,random(vol * 1000));
        ellipse(windowWidth/8*6,windowHeight/4*3,random(vol * 1000));
ellipse(windowWidth/8*7,windowHeight/4*3,random(vol * 1000));

color(random(255), random(255), random(255), random(255));

}
