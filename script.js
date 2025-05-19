// Calculate BMI
function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let output = document.getElementById("output");

  // Check if input is valid
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    output.innerHTML = "<span class='text-danger'>Please enter valid positive numbers for weight and height.</span>";
    return;
  }

  // BMI formula
  let bmi = weight / Math.pow(height, 2);
  bmi = bmi.toFixed(2); // Round to 2 decimal places

  // Determine category
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else if (bmi >= 30) {
    category = "Obese";
  }

  // Output result
  output.innerHTML = `Your BMI is <strong>${bmi}</strong> which is considered <strong>${category}</strong>.`;
}
