'use strict'

//a different way of selecting an element that has no id. it is similar to css selector
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:last-child');
let resultsButton = document.getElementById('results');
let index1 = 0;
let index2 = 0;
let index3 = 0;
let clicks = 0;


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

let uniqueImages = [];

// get 1 random image from images into uniqueImages array
function uniqueImagesBuilder(){
  for (let i = 0; i < 25; i++) {
    while (uniqueImages.length < 6) {
      let randomIndex = randomImageIndex();
      if (!uniqueImages.includes(images[randomIndex])) {
        uniqueImages.push(images[randomIndex]);
      }
      console.log('after push Unique image is:', uniqueImages);
    }

    
    // console.log('first second thir are', first, second, third);
    // console.log('unique images after shift is:', uniqueImages);
  }
}


// console.log('this is a random unique number', uniqueImages);


// get random index pf our images array
function randomImageIndex(){
  return Math.floor(Math.random() * images.length); /* number between 0-18*/
}

// render function: invoke function on page load, I want to render 3 random images
function renderImages(){
  // for (let i = 0; i < images.concat.length; i++){
    //   index1 = randomImageIndex();
  //   index2 = randomImageIndex();
  //   index3 = randomImageIndex();

  //   // make the random images be different. we use a while loop instead of for loop because a for loop will keep looping once the statement is true. we want it to move on once true.
  //   while (index1 === index2 || index2 === index3 || index1 === index3) {
  //     index1 = randomImageIndex();
  //     index2 = randomImageIndex();
  //     index3 = randomImageIndex();
  //   }
  
  uniqueImagesBuilder();
  // let firstImage = uniqueImages[0];
  //   let secondImage = uniqueImages[1];
  //   let thirdImage = uniqueImages[2];
    let firstImage = uniqueImages.shift();
    let secondImage = uniqueImages.shift();
    let thirdImage = uniqueImages.shift();
    
    // DOM Manipulation
    image1.src = firstImage.src;
    image1.alt = firstImage.name;
    image1.title = firstImage.name;
    image1.id = images.indexOf(firstImage);
    image2.src = secondImage.src;
    image2.alt = secondImage.name;
    image2.title = secondImage.name;
    image2.id = images.indexOf(secondImage);
    image3.src = thirdImage.src;
    image3.alt = thirdImage.name;
    image3.title = thirdImage.name;
    image3.id = images.indexOf(thirdImage);

    // increwment views
    firstImage.views++;
    secondImage.views++;
    thirdImage.views++;
  // }
}

// event handler
  // increment image .clicks
  // render 3 new images
function handleImageclick(event) {
  clicks++;
  // the event object knows about the event, and the element targeted
  console.log(event.target);

  // increment the number of times clicked by targetting each images id
  images[event.target.id].clicks++;

  if (clicks > 24) {
    // remove the event listener
    image1.removeEventListener('click', handleImageclick);
    image2.removeEventListener('click', handleImageclick);
    image3.removeEventListener('click', handleImageclick);
  }

  console.log(images);
  renderImages();
}

// results button function to display unordered lis
function viewResults() {
  let ulParent = document.querySelector('ul');
  // make one li for each images inside the images array
  for (let i =0; i < images.length; i++) {
    let li = document.createElement('li');
    li.innerText = `${images[i].name} has ${images[i].clicks} votes, and was seen ${images[i].views} times`;
    ulParent.appendChild(li);
  }
  // add our chart.js code here!

  // get my images names into an array with a for loop:
  let imagesNames = [];
  for (let i = 0; i < images.length; i++) {
      imagesNames.push(images[i].name);
  }
  console.log('the images are here:', imagesNames);

  // get my images click data into an array with a for loop:
  let imagesClicks = [];
  for (let i = 0; i < images.length; i++) {
      imagesClicks.push(images[i].clicks);
  }
  console.log('the images are here:', imagesClicks);

  const ctx = document.getElementById('myChart');
  
  // the starter code for this Chart comes from chartjs.org's "Getting Started"
  new Chart(ctx, {
  type: 'bar',
  data: {
      labels: imagesNames, // x-axis
      datasets: [{
          label: '# of Clicks Per Images', // title
          data: imagesClicks, // y-axis data
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
      y: {
          beginAtZero: true
      }
      }
  }
  });

  resultsButton.removeEventListener('click', viewResults);
}


// render on page load
image1.addEventListener('click', handleImageclick);
image2.addEventListener('click', handleImageclick);
image3.addEventListener('click', handleImageclick);
resultsButton.addEventListener('click', viewResults);
renderImages();




