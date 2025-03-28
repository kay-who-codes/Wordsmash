// Sample data
const letters = [
  // 3 each for vowels
  "A", "A", "A",
  "B", "B",
  "C", "C",
  "D", "D",
  "E", "E", "E",
  "F", "F",
  "G", "G",
  "H", "H",
  "I", "I", "I",
  "J",
  "K",
  "L", "L",
  "M", "M",
  "N", "N", "N",
  "O", "O", "O",
  "P", "P",
  "Q",
  "R", "R", "R",
  "S", "S", "S",
  "T", "T", "T",
  "U", "U", "U",
  "V",
  "W", "W",
  "X",
  "Y",
  "Z"
];
const actions = ["Thing", "Name Initials", "Place Name", "Food/Drink", "Rhyming", "Opposites", "Synonyms", "Adjective + Noun", "Verb + Noun","Media (Music, Film, Game, etc)"];

// DOM Elements
const pile1 = document.getElementById("pile1");
const pile2 = document.getElementById("pile2");
const pile3 = document.getElementById("pile3");
const dealCards = document.getElementById("deal-cards");
const gainPoint = document.getElementById("gain-point");
const scoreDisplay = document.getElementById("score");

// Game State
let score = 0;

// Deal Cards Function
function dealNewCards() {
  // Randomly assign letters to the first two piles
  pile1.textContent = letters[Math.floor(Math.random() * letters.length)];
  pile2.textContent = letters[Math.floor(Math.random() * letters.length)];

  // Randomly assign an action to the third pile
  pile3.textContent = actions[Math.floor(Math.random() * actions.length)];
}

// Gain Point Function
function addPoint() {
  score++;
  scoreDisplay.textContent = `Action Cards Collected: ${score}`;
}

// Event Listeners
dealCards.addEventListener("click", dealNewCards);
gainPoint.addEventListener("click", addPoint);

// Initial Deal
dealNewCards();