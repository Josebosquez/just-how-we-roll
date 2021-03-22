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

/*******************
 * EVENT LISTENERS *
 *******************/
const clickD6 = document.getElementById("d6-roll");

clickD6.addEventListener("click", function (){
  const rolledNumber = getRandomNumber(6);
  sixes.push(rolledNumber);
  console.log("d6:", sortByNumber(sixes))
  D6Img.src = `images/d6/${rolledNumber}.png`
  document.getElementById("d6-rolls-mean").innerText = getMean(sixes)
});


/******************
 * RESET FUNCTION *
 ******************/


const resetAll = document.getElementById("reset-button");
resetAll.addEventListener("click", function(){
  console.log("Clicked it");
  sixes.splice(0, sixes.length);
  console.log(sixes)
  D6Img.src = "images/start/d6.png"

})




/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/


const getMean = function (diceRolls) {
let sum = 0;
for (num of diceRolls){
  sum+=num;
} let average = sum/diceRolls.length
  return average.toFixed(2)
}

