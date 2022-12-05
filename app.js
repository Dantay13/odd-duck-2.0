'use strict'

//a different way of selecting an element that has no id. it is similar to css selector
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:last-child');
let index1 = 0;
let index2 = 0;
let index3 = 0;


let Image = function(name, src){
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
};

let bag = new Image('bag', './img/bag.jpg');
let banana = new Image('banana', './img/banana.jpg');
let bathroom = new Image('bathroom', './img/bathroom.jpg');
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


// get random index pf our images array
function randomImageIndex(){
  return Math.floor(Math.random() * images.length); /* number between 0-18*/
}

// render function: invoke function on page load, I want to render 3 random images
function renderImages(){
  for (let i = 0; i < images.concat.length; i++){
    index1 = randomImageIndex();
    index2 = randomImageIndex();
    index3 = randomImageIndex();

    // make the random images be different. we use a while loop instead of for loop because a for loop will keep looping once the statement is true. we want it to move on once true.
    while (index1 === index2 || index2 === index3 || index1 === index3) {
      index1 = randomImageIndex();
      index2 = randomImageIndex();
      index3 = randomImageIndex();
    }

    let firstImage = images[index1];
    let secondImage = images[index2];
    let thirdImage = images[index3];

    // DOM Manipulation
    image1.src = firstImage.src;
    image1.alt = firstImage.name;
    image1.title = firstImage.name;
    image2.src = secondImage.src;
    image2.alt = secondImage.name;
    image2.title = secondImage.name;
    image3.src = thirdImage.src;
    image3.alt = thirdImage.name;
    image3.title = thirdImage.name;

    // increwment views
    firstImage.views++;
    secondImage.views++;
    thirdImage.views++;
  }
}

// even handler
// what happens when our viewers click an image?
  // increment image .clicks
  // render 3 new images
function handleImageclick(event) {
  // the event object knows about the event, and the element targeted
  console.log(event.target);

  // how to increment the correct image clicked
  // method to iterate over the image array
  // 1. iterate over images
  // 2. if images[i].alt == event.target
  // another method:
  // use global index variables
  if (images[index1].name === event.target.name) {
    images[image1].clicks++;
  }
  if (images[index2].name === event.target.name) {
    images[image2].clicks++;
  }
  if (images[index3].name === event.target.name) {
    images[image3].clicks++;
  }

  console.log(images);
  renderImages();
}

// render on page load
image1.addEventListener('click', handleImageclick);
image2.addEventListener('click', handleImageclick);
image3.addEventListener('click', handleImageclick);
renderImages();




