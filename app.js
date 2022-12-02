'use strict'

//a different way of selecting an element that has no id. it is similar to css selector
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:last-child');


let Image = function(name, src){
  this.name = name;
  this.src = src;
  this.clicks = 0;
};

let bag = new Image('bag', './img/bag.jpg,');
let banana = new Image('banana', './img/banana.jpg');
let bathroom = new Image('bathroom', '.img/bathroom.jpg');
let boots = new Image('boot', './img/boots.jpg');
let breakfast = new Image('breakfast', './img/breakfast.jpg');
let bubblegum = new Image('bubblegum', './img/bubblegum.jpg');
let chair = new Image('chair', './img/chair.jpg');
let cthulhu = new Image('cthulhu', './img/cthulhu.jpg');
let dogDuck = new Image('dog-duck', './img/dog-duck.jpg');
let dragon = new Image('dragon', './img/dragon.jpg');
let pen = new Image('pen', './img/pen.jpg');
let petSweep = new Image('pet-sweep', './img/pet-sweep.jpg');
let scissors = new Image('scissors', './img/scissors.jpg');
let shark = new Image('shark', './img/shark.jpg');
let sweep = new Image('sweep', './img/sweep.png');
let tauntaun = new Image('tauntaun', './img/tauntaun.jpg');
let unicorn = new Image('unicorn', './img/unicorn.jpg');
let waterCan = new Image('water-can', './img/water-can.jpg');
let wineGlass = new Image('wine-glass', './img/wine-glass.jpg');

let images = [bag, banana, boots, bathroom, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];



function randomImageIndex(){
  return Math.floor(Math.random() * Image.length);
}

// render function: invoke function on page load, I want to render 3 random images
function renderImages(){
  let firstImage = images[randomImageIndex()];
  let secondImage = images[randomImageIndex()];
  let thirdImage = images[randomImageIndex()];

  // DOM Manipulation
  image1.src = firstImage.src;
  image2.src = secondImage.src;
  image3.src = thirdImage.src;

}

// render on page load
renderImages();



