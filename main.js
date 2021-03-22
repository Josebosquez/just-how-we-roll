/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
const D6Img = document.getElementById("d6-roll");
  D6Img.src = "images/start/d6.png"

const DD6Img1 = document.getElementById("double-d6-roll-1");
  DD6Img1.src = "images/start/d6.png"

const DD6Img2 = document.getElementById("double-d6-roll-2");
  DD6Img2.src = "images/start/d6.png"

const D12Img = document.getElementById("d12-roll");
  D12Img.src = "images/start/d12.jpeg"

const D20Img = document.getElementById("d20-roll");
  D20Img.src = "images/start/d20.jpg"

/*******************
 * EVENT LISTENERS *
 *******************/
const clickD6 = document.querySelector("#d6-roll");

function rollingtheD6 (){

}

clickD6.addEventListener('click', somefunction);


const clickDD6 = document.querySelector("#double img")
clickDD6.addEventListener('click', somefunction);


const clickD12 = document.querySelector("#d12-roll")
clickD12.addEventListener('click', somefunction);


const clickD20 = document.querySelector("#d20-roll")
clickD20.addEventListener('click', somefunction);


/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/

