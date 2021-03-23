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
const clickD6 = document.getElementById("d6-roll");
const clickDD61 = document.getElementById("double-d6-roll-1");
const clickDD62 = document.getElementById("double-d6-roll-2");
const clickD12 = document.getElementById("d12-roll");
const clickD20 = document.getElementById("d20-roll");

clickD6.addEventListener("click", function (){
  const rolledNumber = getRandomNumber(6);
  sixes.push(rolledNumber);
  console.log("d6:", sortByNumber(sixes));
  D6Img.src = `images/d6/${rolledNumber}.png`
  document.getElementById("d6-rolls-mean").innerText = getMean(sixes);
  document.getElementById("d6-rolls-median").innerText = getMedian(sixes);
  document.getElementById("d6-rolls-mode").innerText = getMode(sixes);
});

clickDD61.addEventListener("click", function () {
	rolledNumberDD61 = getRandomNumber(6);
  rolledNumberDD62 = getRandomNumber(6);
	doubleSixes.push(rolledNumberDD61 + rolledNumberDD62);
  console.log("dd61:", rolledNumberDD61, "d6two:", rolledNumberDD62)
	console.log("doubleD6:", sortByNumber(doubleSixes));
	document.getElementById("double-d6-rolls-mean").innerText = getMean(doubleSixes);
	document.getElementById("double-d6-rolls-median").innerText = getMedian(doubleSixes);
	document.getElementById("double-d6-rolls-mode").innerText = getMode(doubleSixes);
	DD6Img1.src = `images/d6/${rolledNumberDD61}.png`
  DD6Img2.src = `images/d6/${rolledNumberDD62}.png`
});

clickDD62.addEventListener("click", function () {
	rolledNumberDD61 = getRandomNumber(6);
  rolledNumberDD62 = getRandomNumber(6);
	doubleSixes.push(rolledNumberDD61 + rolledNumberDD62);
  console.log("dd61:", rolledNumberDD61 , "d6two:", rolledNumberDD62)
	console.log("doubleD6:", sortByNumber(doubleSixes));
	document.getElementById("double-d6-rolls-mean").innerText = getMean(doubleSixes);
	document.getElementById("double-d6-rolls-median").innerText = getMedian(doubleSixes);
	document.getElementById("double-d6-rolls-mode").innerText = getMode(doubleSixes);
	DD6Img1.src = `images/d6/${rolledNumberDD61}.png`
  DD6Img2.src = `images/d6/${rolledNumberDD62}.png`
});

clickD12.addEventListener("click", function (){
  const rolledNumber12 = getRandomNumber(12);
  twelves.push(rolledNumber12);
  console.log("d12:", sortByNumber(twelves))
  D12Img.src = `images/numbers/${rolledNumber12}.png`
  document.getElementById("d12-rolls-mean").innerText = getMean(twelves);
  document.getElementById("d12-rolls-median").innerText = getMedian(twelves);
  document.getElementById("d12-rolls-mode").innerText = getMode(twelves);
});

clickD20.addEventListener("click", function (){
  const rolledNumber20 = getRandomNumber(20);
  twenties.push(rolledNumber20);
  console.log("d20:", sortByNumber(twenties))
  D20Img.src = `images/numbers/${rolledNumber20}.png`
  document.getElementById("d20-rolls-mean").innerText = getMean(twenties);
  document.getElementById("d20-rolls-median").innerText = getMedian(twenties);
  document.getElementById("d20-rolls-mode").innerText = getMode(twenties);
});

/******************
 * RESET FUNCTION *
 ******************/

const resetAll = document.getElementById("reset-button");
resetAll.addEventListener("click", function(){
  sixes.splice(0, sixes.length);
  D6Img.src = "images/start/d6.png";
  document.getElementById("d6-rolls-mean").innerText = "Na";
  document.getElementById("d6-rolls-median").innerText = "Na";
  document.getElementById("d6-rolls-mode").innerText = "Na";

  doubleSixes.splice(0, doubleSixes.length);
  DD6Img1.src = "images/start/d6.png";
  DD6Img2.src = "images/start/d6.png"
  document.getElementById("double-d6-rolls-mean").innerText = "Na";
  document.getElementById("double-d6-rolls-median").innerText = "Na";
  document.getElementById("double-d6-rolls-mode").innerText = "Na";  

  twelves.splice(0, twelves.length);
  D12Img.src = "images/start/d12.jpeg";
  document.getElementById("d12-rolls-mean").innerText = "Na";
  document.getElementById("d12-rolls-median").innerText = "Na";
  document.getElementById("d12-rolls-mode").innerText = "Na";  

  twenties.splice(0, twenties.length);
  D20Img.src = "images/start/d20.jpg";
  document.getElementById("d20-rolls-mean").innerText = "Na";
  document.getElementById("d20-rolls-median").innerText = "Na";
  document.getElementById("d20-rolls-mode").innerText = "Na";  
})



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


const getMedian = function(rolls) {
  const sorted = sortByNumber(rolls);
  const middleNum = Math.floor(sorted.length / 2)
  if (sorted.length % 2 === 0) {
    return getMean([sorted[middleNum], sorted[middleNum - 1]]);
  } else {
    return sorted[middleNum].toFixed(2);
  }
}

const getMode = function(rolls) {
  const counts = {};
  let mode = 'NA'
  for (const roll of rolls) {
    if (roll in counts) {
      counts[roll]++;
    } else {
      counts[roll] = 1;
    }
    if (counts[mode] === undefined || counts[roll] > counts[mode]) {
      mode = roll;
    }
  }
  return mode;
}
