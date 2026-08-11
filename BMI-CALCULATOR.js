function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let heightMeters = height / 100;
    let bmi = (weight / (heightMeters * heightMeters)).toFixed(1);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById('result').innerText = "Your BMI is " + bmi + " (" + category + ")";
}