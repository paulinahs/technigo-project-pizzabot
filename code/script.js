// Start here

// Step 1 - Welcome and introduction
// Your code goes here
// a) Initial welcome message
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// b) Ask for the user's name and store it in a variable
const userName = prompt("What is your name?");

// c) Greet the user using the name they entered
alert(`Hi and welcome, ${userName}!`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(
  "What would you like to order today?\n1 - Pizza\n2 - Pasta\n3 - Salad"
);

let foodType;

if (foodChoice === "1") {
  foodType = "Pizza";
} else if (foodChoice === "2") {
  foodType = "Pasta";
} else if (foodChoice === "3") {
  foodType = "Salad";
} else {
  alert("Sorry, that is not a valid option.");
}


// Step 3 - Subtype choice
// Your code goes here
let subtype;

if (foodType === "Pizza") {
  subtype = prompt("What kind of pizza would you like?\n1 - Margherita\n2 - Pepperoni\n3 - Veggie");
  if (subtype === "1") subtype = "Margherita";
  else if (subtype === "2") subtype = "Pepperoni";
  else if (subtype === "3") subtype = "Veggie";
} else if (foodType === "Pasta") {
  subtype = prompt("What kind of pasta would you like?\n1 - Carbonara\n2 - Bolognese\n3 - Pesto");
  if (subtype === "1") subtype = "Carbonara";
  else if (subtype === "2") subtype = "Bolognese";
  else if (subtype === "3") subtype = "Pesto";
} else if (foodType === "Salad") {
  subtype = prompt("What kind of salad would you like?\n1 - Caesar\n2 - Greek\n3 - Garden");
  if (subtype === "1") subtype = "Caesar";
  else if (subtype === "2") subtype = "Greek";
  else if (subtype === "3") subtype = "Garden";
}

// Step 4 - Age
// Your code goes here
const ageGroup = prompt("Is this meal for a child or an adult? (Type 'child' or 'adult')");
let price;

if (ageGroup.toLowerCase() === "child") {
  price = 9; // discounted price
} else if (ageGroup.toLowerCase() === "adult") {
  price = 15; // full price
} else {
  alert("Invalid input. Defaulting to adult price.");
  price = 15;
}

const confirmOrder = prompt(`You’ve ordered a ${subtype} ${foodType} for a ${ageGroup}. That will be €${price}. Confirm order? (yes/no)`);


// Step 5 - Order confirmation
// Your code goes here
if (confirmOrder.toLowerCase() === "yes") {
  alert(`Thank you, ${userName}! Your ${subtype} ${foodType} will be prepared shortly. Enjoy!`);
} else {
  alert(`No worries, ${userName}. Feel free to come back when you're ready to order. Have a nice day!`);
}
