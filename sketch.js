function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(1280,720);
  smooth();
  background(0);
  frameRate(20);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  //textSize(40);
  textSize(windowHeight/20);
  //print(windowWidth);
}

function draw() {
  let x = width/2;
  let y = height/2;
  let wh = windowHeight;
  let ms = millis();
  let sec = floor(ms/1000);
  timer(ms);
  
  //Intro
  if (sec < 5){
    screenWrite("Can You Spare 8 Minutes and 46 Seconds?", x, y);
  }
  
  if (sec >= 5 && sec < 6){
    screenWrite("", x, y);
  }
  
  if (sec >=6 && sec<10){
    screenWrite("Don't look away.", x, y - wh/20);
    if(sec >=8){
      text("Don't turn this off.", x, y + wh/20);
    }
  }
  
  if (sec >= 10 && sec < 11){
    screenWrite("",x,y);
  }
  
  if (sec >= 11 && sec < 14){
    screenWrite("Watch all the way to the end.",x,y);
  }
  
  if (sec >=14 && sec < 18){
    screenWrite("",x,y);
  }
  
  if (sec >=18 && sec < 25){
    screenWrite("These are George Floyd's last words:",x,y);
  }
  
  if (sec >= 25 && sec < 26){
    screenWrite("",x,y);
  }
  
  if (sec >= 26 && sec < 30){
    screenWrite("In real time.",x,y);
  }
  
  if (sec >= 30 && sec < 50){
    screenWrite("",x,y);
  }
  
  
  
  //Last Words
  if (sec >= 50 && sec < 53){
    screenWrite("It's my face man",x,y);
  }
  
  if (sec >= 53 && sec < 58){
    screenWrite("",x,y);
  }
  
  if (sec >= 58 && sec < 60){
    screenWrite("I didn't do nothing serious man",x,y);
  }
  
  if (sec >= 60 && sec < 61){
    screenWrite("",x,y);
  }
  
  if (sec >= 61 && sec < 62){
    screenWrite("Please",x,y);
  }
  
  if (sec >= 62 && sec < 63){
    screenWrite("",x,y);
  }
  
  if (sec >= 63 && sec < 64){
    screenWrite("Please",x,y);
  }
  
  if (sec >= 64 && sec < 65){
    screenWrite("",x,y);
  }
  
  if (sec >= 65 && sec < 67){
    screenWrite("Please I can't breathe",x,y);
  }
  
  if (sec >= 67 && sec < 68){
    screenWrite("",x,y);
  }
  
  if (sec >= 68 && sec < 69){
    screenWrite("Please man",x,y);
  }
  
  if (sec >= 69 && sec < 85){
    screenWrite("",x,y);
  }
  
  if (sec >= 85 && sec < 86){
    screenWrite("I can't breathe",x,y);
  }
  
  if (sec >= 86 && sec < 87){
    screenWrite("",x,y);
  }
  
  if (sec >= 87 && sec < 88){
    screenWrite("I can't breathe",x,y);
  }
  
  if (sec >= 88 && sec < 93){
    screenWrite("",x,y);
  }
  
  if (sec >= 93 && sec < 95){
    screenWrite("Please",x,y);
  }
  
  if (sec >= 95 && sec < 104){
    screenWrite("",x,y);
  }
  
  if (sec >= 104 && sec < 105){
    screenWrite("Man can't breathe, my face",x,y);
  }
  
  if (sec >= 105 && sec < 106){
    screenWrite("",x,y);
  }
  
  if (sec >= 106 && sec < 107){
    screenWrite("Just get up",x,y);
  }
  
  if (sec >= 107 && sec < 110){
    screenWrite("",x,y);
  }
  
  if (sec >= 110 && sec < 111){
    screenWrite("I can't breathe",x,y);
  }
  
  if (sec >= 111 && sec < 112){
    screenWrite("",x,y);
  }
  
  if (sec >= 112 && sec < 113){
    screenWrite("Please",x,y);
  }
  
  if (sec >= 113 && sec < 115){
    screenWrite("",x,y);
  }
  
  if (sec >= 115 && sec < 116){
    screenWrite("I can't breathe",x,y);
  }
  
  if (sec >= 116 && sec < 117){
    screenWrite("",x,y);
  }
  
  if (sec >= 117 && sec < 118){
    screenWrite("I will",x,y);
  }
  
  if (sec >= 118 && sec < 119){
    screenWrite("",x,y);
  }
  
  if (sec >= 119 && sec < 120){
    screenWrite("I can't move",x,y);
  }
  
  if (sec >= 120 && sec < 123){
    screenWrite("",x,y);
  }
  
  if (sec >= 123 && sec < 124){
    screenWrite("Mama",x,y);
  }
  
  if (sec >= 124 && sec < 125){
    screenWrite("",x,y);
  }
  
  if (sec >= 125 && sec < 126){
    screenWrite("Mama",x,y);
  }
  
  if (sec >= 126 && sec < 127){
    screenWrite("",x,y);
  }
  
  if (sec >= 127 && sec < 129){
    screenWrite("I can't",x,y);
  }
  
  if (sec >= 129 && sec < 131){
    screenWrite("",x,y);
  }
  
  if (sec >= 131 && sec < 132){
    screenWrite("My knee",x,y);
  }
  
  if (sec >= 132 && sec < 133){
    screenWrite("",x,y);
  }
  
  if (sec >= 133 && sec < 134){
    screenWrite("My neck",x,y);
  }
  
  if (sec >= 134 && sec < 136){
    screenWrite("",x,y);
  }
  
  if (sec >= 136 && sec < 138){
    screenWrite("I'm through I'm through",x,y);
  }
  
  if (sec >= 138 && sec < 139){
    screenWrite("",x,y);
  }
  
  if (sec >= 139 && sec < 140){
    screenWrite("I'm claustrophobic",x,y);
  }
  
  if (sec >= 140 && sec < 141){
    screenWrite("",x,y);
  }
  
  if (sec >= 141 && sec < 142){
    screenWrite("My stomach hurts",x,y);
  }
  
  if (sec >= 142 && sec < 143){
    screenWrite("",x,y);
  }
  
  if (sec >= 143 && sec < 144){
    screenWrite("My neck hurts",x,y);
  }
  
  if (sec >= 144 && sec < 145){
    screenWrite("",x,y);
  }
  
  if (sec >= 145 && sec < 147){
    screenWrite("Everything hurts",x,y);
  }
  
  if (sec >= 147 && sec < 148){
    screenWrite("",x,y);
  }
  
  if (sec >= 148 && sec < 149){
    screenWrite("Some water or something",x,y);
  }
  
  if (sec >= 149 && sec < 150){
    screenWrite("",x,y);
  }
  
  if (sec >= 150 && sec < 151){
    screenWrite("Please",x,y);
  }
  
  if (sec >= 151 && sec < 152){
    screenWrite("",x,y);
  }
  
  if (sec >= 152 && sec < 153){
    screenWrite("Please",x,y);
  }
  
  if (sec >= 153 && sec < 154){
    screenWrite("",x,y);
  }
  
  if (sec >= 154 && sec < 156){
    screenWrite("I can't breathe officer",x,y);
  }
  
  if (sec >= 156 && sec < 157){
    screenWrite("",x,y);
  }
  
  if (sec >= 157 && sec < 159){
    screenWrite("Don't kill me",x,y);
  }
  
  if (sec >= 159 && sec < 160){
    screenWrite("",x,y);
  }
  
  if (sec >= 160 && sec < 162){
    screenWrite("They gonna kill me man",x,y);
  }
  
  if (sec >= 162 && sec < 166){
    screenWrite("",x,y);
  }
  
  if (sec >= 166 && sec < 168){
    screenWrite("Come on man",x,y);
  }
  
  if (sec >= 168 && sec < 175){
    screenWrite("",x,y);
  }
  
  if (sec >= 175 && sec < 176){
    screenWrite("I cannot breathe",x,y);
  }
  
  if (sec >= 176 && sec < 177){
    screenWrite("",x,y);
  }
  
  if (sec >= 177 && sec < 178){
    screenWrite("I cannot breathe",x,y);
  }
  
  if (sec >= 178 && sec < 189){
    screenWrite("",x,y);
  }
  
  if (sec >= 189 && sec < 190){
    screenWrite("They gonna kill me",x,y);
  }
  
  if (sec >= 190 && sec < 191){
    screenWrite("",x,y);
  }
  
  if (sec >= 191 && sec < 192){
    screenWrite("They gonna kill me",x,y);
  }
  
  if (sec >= 192 && sec < 197){
    screenWrite("",x,y);
  }
  
  if (sec >= 197 && sec < 198){
    screenWrite("I can't breathe",x,y);
  }
  
  if (sec >= 198 && sec < 199){
    screenWrite("",x,y);
  }
  
  if (sec >= 199 && sec < 200){
    screenWrite("I can't breathe",x,y);
  }
  
  if (sec >= 200 && sec < 215){
    screenWrite("",x,y);
  }
  
  if (sec >= 215 && sec < 216){
    screenWrite("Please sir",x,y);
  }
  
  if (sec >= 216 && sec < 217){
    screenWrite("",x,y);
  }
  
  if (sec >= 217 && sec < 218){
    screenWrite("Please",x,y);
  }
  
  if (sec >= 218 && sec < 219){
    screenWrite("",x,y);
  }
  
  if (sec >= 219 && sec < 220){
    screenWrite("Please",x,y);
  }
  
  if (sec >= 220 && sec < 235){
    screenWrite("",x,y);
  }
  
  if (sec >= 235 && sec < 238){
    screenWrite("Please I can't breathe",x,y);
  }
  
  if (sec >= 238 && sec < 239){
    screenWrite("",x,y);
  }
  
  
  //End
  if (sec > 526){
    background(0);
    noLoop();
  }
}

function screenWrite(words, xcen, ycen){
  //background(0);
  fill(0);
  stroke(0);
  rect(xcen,ycen, windowWidth, windowHeight-200);
  fill(255);
  stroke(255);
  text(words,xcen, ycen, 2*xcen, 2*ycen);  
}

function timer(milis){
  let sElaps = floor(milis / 1000);
  let min = floor(sElaps/60);
  let sec = sElaps % 60;
  if (sec < 10){
    sec = "0" + String(sec);
  }
  fill(0);
  stroke(0);
  rect(windowWidth/2, windowHeight-50, windowWidth, 100);
  fill(255);
  stroke(255);
  text(String(min) + " : " + String(sec), windowWidth/2, windowHeight-50);
  
}