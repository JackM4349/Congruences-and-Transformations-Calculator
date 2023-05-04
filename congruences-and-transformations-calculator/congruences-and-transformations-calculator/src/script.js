// Define global variables
let currentCalculator = 1;

// Function to show/hide calculator sections
function showCalculator(index) {
  // Hide all calculators
  document.getElementById('congruence-calculator').style.display = 'none';
  document.getElementById('transformation-calculator').style.display = 'none';
  document.getElementById('rotation-calculator').style.display = 'none';
  
  // Show the selected calculator
  if (index === 1) {
    document.getElementById('congruence-calculator').style.display = 'block';
  } else if (index === 2) {
    document.getElementById('transformation-calculator').style.display = 'block';
  } else if (index === 3) {
    document.getElementById('rotation-calculator').style.display = 'block';
  }
  
  // Update current calculator index
  currentCalculator = index;
}

// Function to handle 'next' button click
function nextCalculator() {
  currentCalculator++;
  if (currentCalculator > 3) {
    currentCalculator = 1;
  }
  showCalculator(currentCalculator);
}

// Function to handle 'previous' button click
function previousCalculator() {
  currentCalculator--;
  if (currentCalculator < 1) {
    currentCalculator = 3;
  }
  showCalculator(currentCalculator);
}

// Function to display instructions
function displayInstructions() {
  const congruenceInstructions = 'Enter the values of a, b and n to solve the congruence equation a*x ≡ b (mod n).';
  const transformationInstructions = 'Enter the transformation matrix and the coordinates of a point to apply the transformation.';
  const rotationInstructions = 'Enter the angle of rotation and the coordinates of a point to rotate the point.';
  
  let instructions = '';
  if (currentCalculator === 1) {
    instructions = congruenceInstructions;
  } else if (currentCalculator === 2) {
    instructions = transformationInstructions;
  } else if (currentCalculator === 3) {
    instructions = rotationInstructions;
  }
  
  // Update instructions text
  document.getElementById('instructions-text').textContent = instructions;
}

// Function to display help
function displayHelp() {
  const congruenceHelp = 'To solve the congruence equation, enter the values of a, b and n, and then click the "Calculate" button.';
  const transformationHelp = 'To apply the transformation, enter the transformation matrix and the coordinates of a point, and then click the "Apply" button.';
  const rotationHelp = 'To rotate a point, enter the angle of rotation and the coordinates of the point, and then click the "Rotate" button.';
  
  let help = '';
  if (currentCalculator === 1) {
    help = congruenceHelp;
  } else if (currentCalculator === 2) {
    help = transformationHelp;
  } else if (currentCalculator === 3) {
    help = rotationHelp;
  }
  
  // Update help text
  document.getElementById('help-text').textContent = help;
}

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
  // your JavaScript code here
});
document.getElementById('previous-button').addEventListener('click', previousCalculator);
document.getElementById('instructions-button').addEventListener('click', displayInstructions);
document.getElementById('help-button').addEventListener('click', displayHelp);

// Initialize the calculator display
showCalculator(1);
displayInstructions();
displayHelp();
document.addEventListener("DOMContentLoaded", function() {
  const congruenceBtn = document.getElementById("congruence-btn");
  const transformationBtn = document.getElementById("transformation-btn");
  const rotationBtn = document.getElementById("rotation-btn");

  // ...
});
const congruenceCalc = document.getElementById("congruence-calc");
const transformationCalc = document.getElementById("transformation-calc");
const rotationCalc = document.getElementById("rotation-calc");
const calcList = [congruenceCalc, transformationCalc, rotationCalc];

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const helpBtn = document.getElementById("help-btn");
const helpText = document.getElementById("help-text");

let currentCalcIndex = 0;

function showCalc(index) {
  calcList.forEach((calc, i) => {
    if (i === index) {
      calc.style.display = "block";
    } else {
      calc.style.display = "none";
    }
  });
}

showCalc(currentCalcIndex);

prevBtn.addEventListener("click", () => {
  currentCalcIndex--;
  if (currentCalcIndex < 0) {
    currentCalcIndex = calcList.length - 1;
  }
  showCalc(currentCalcIndex);
});

nextBtn.addEventListener("click", () => {
  currentCalcIndex++;
  if (currentCalcIndex >= calcList.length) {
    currentCalcIndex = 0;
  }
  showCalc(currentCalcIndex);
});

helpBtn.addEventListener("click", () => {
  const currentCalc = calcList[currentCalcIndex];
  const instructions = currentCalc.querySelector(".instructions").innerHTML;
  helpText.innerHTML = instructions;
  helpText.style.display = "block";
});

helpText.addEventListener("click", () => {
  helpText.style.display = "none";
});
const helpButton = document.getElementById('help-button');
const helpPopup = document.getElementById('help-popup');
const closePopup = document.getElementById('close-popup');

helpButton.addEventListener('click', () => {
  helpPopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  helpPopup.style.display = 'none';
});

// Optional: add event listeners to the links inside the popup to display the appropriate calculator help
const congruenceHelp = document.getElementById('congruence-help');
const transformationHelp = document.getElementById('transformation-help');
const rotationHelp = document.getElementById('rotation-help');

congruenceHelp.addEventListener('click', () => {
  alert('Congruence calculator help');
});

transformationHelp.addEventListener('click', () => {
  alert('Transformation calculator help');
});

rotationHelp.addEventListener('click', () => {
  alert('Rotation calculator help');
});
function showHelp() {
  let helpMessage = "";
  let calcType = document.querySelector(".calc-type").textContent.trim();

  if (calcType === "Congruence") {
    helpMessage =
      "Enter values for a, b, and c. The calculator will find the value of x that satisfies the equation: ax ≡ b (mod c).";
  } else if (calcType === "Transformations") {
    helpMessage =
      "Enter values for a, b, c, and d. The calculator will perform the transformation T(x,y) = (ax+by,cx+dy) on the point (x,y).";
  } else if (calcType === "Rotations") {
    helpMessage =
      "Enter values for the angle of rotation and the coordinates of the point. The calculator will perform a counterclockwise rotation of the given angle about the origin on the point.";
  }

  alert(helpMessage);
}