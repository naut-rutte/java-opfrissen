/* JavaScript opfris opdracht
   
    Lees de README voor uitleg
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path=".vscode/p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
let appelX = 600; // x-positie van appel
let appelY = 50;  // y-positie van appel
let appelBreedte = 20; 
let mandjeY = 650 ;
let Breedjemandje = 100 ; 
let Hoogtemandje = 15 ; 
let score = 0 ; 
let Appelraaktmandje = false; 


/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  // mandjeX = MouseX; 
   
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // teken achtergrond
  background('black');

  // mandjeX = MouseX;
fill(255,255,255)
  text('score =' + score , 1200 ,25 ); 

  // teken appel
  noStroke();         // geen lijntje om de vorm heen
  fill(255, 0, 0)     // vulkleur wordt rood
  rect(appelX, appelY, appelBreedte, appelBreedte);
  appelY= appelY + 1; 
  noStroke();
  fill(165,42,42)
  rect(mouseX,mandjeY,Breedjemandje,Hoogtemandje);
  
  if( mouseX < 10){ 
    mouseX = 20 
  }
  if (mouseX > 1200){
    mouseX = 1199
  }
  if(appelY > 800 ){
    appelY = random(-1000,-200) ;
    appelX = random(50,1200) ;
  }
  if(appelY > mandjeY - 1 && 
    appelY < mandjeY + 1
  ){
    appelY = random(-1000,-200) ;
    appelX = random(50,1200) ;
  }
 if ( appelY > mandjeY - 2 &&
  appelY < mandjeY + 2 && 
  appelX > mouseX - 50 &&
  appelX < mouseX + 50 ) {
    Appelraaktmandje = true ;
    console.log( 'is het waar ' + Appelraaktmandje ) 
  }  
  if (Appelraaktmandje === true ){
    score = score + 1 ; 
    Appelraaktmandje = false ; 
    console.log( 'score = ' + score )
  }
}
