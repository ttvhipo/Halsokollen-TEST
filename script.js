// Funktion för att visa sektioner baserat på hash
function showSection() {
    const hash = window.location.hash;
    const sections = document.querySelectorAll('.tool-section');

    sections.forEach(section => {
        section.style.display = 'none';
        section.style.opacity = 0;
    });

    if (hash) {
        const currentSection = document.querySelector(hash);
        currentSection.style.display = 'block';
        setTimeout(() => currentSection.style.opacity = 1, 100); // Delay for fade-in

        // Ladda och visa sparade data för stegräknare och kaloriräknare
        if (hash === '#stegraknare') {
            loadSteps(); // Ladda sparade steg
        } else if (hash === '#kaloriraknare') {
            loadCalories(); // Ladda sparade kalorier
        }
    }
}

// Funktion för att ladda sparade steg och visa dem
function loadSteps() {
    const stepsResult = document.getElementById("stepsResult");
    const steps = localStorage.getItem('steps');

    // Visa tidigare registrerade steg och meddelande
    if (steps) {
        stepsResult.innerHTML = `Tidigare registrerade steg: ${steps}.`;
    } else {
        stepsResult.innerHTML = "Inga tidigare steg registrerade.";
    }
}

// Funktion för att ladda sparade kalorier och visa dem
function loadCalories() {
    const caloriesResult = document.getElementById("caloriesResult");
    const calories = localStorage.getItem('calories');

    // Visa tidigare registrerade kalorier och meddelande
    if (calories) {
        caloriesResult.innerHTML = `Tidigare registrerade kalorier: ${calories}.`;
    } else {
        caloriesResult.innerHTML = "Inga tidigare kalorier registrerade.";
    }
}

// Funktion för att beräkna BMI
function calculateBMI() {
    const height = document.getElementById("height").value / 100;
    const weight = document.getElementById("weight").value;
    const bmi = (weight / (height * height)).toFixed(2);
    const bmiResult = document.getElementById("bmiResult");

    let message;
    if (bmi < 18.5) {
        message = `Ditt BMI är ${bmi}. Du är underviktig.`;
        bmiResult.className = "alert";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = `Ditt BMI är ${bmi}. Du har normalvikt.`;
        bmiResult.className = "normal";
    } else {
        message = `Ditt BMI är ${bmi}. Du är överviktig.`;
        bmiResult.className = "alert";
    }

    bmiResult.innerHTML = message;
    localStorage.setItem('bmi', bmi);
}

// Funktion för att spåra steg och spara dem
function trackSteps() {
    const steps = document.getElementById("steps").value;
    const stepsResult = document.getElementById("stepsResult");

    if (steps) {
        let message = steps < 10000 
            ? "Försök att öka din dagliga aktivitet."
            : "Bra jobbat, du har nått ditt steg-mål för dagen!";
        
        stepsResult.innerHTML = message;

        // Spara stegen i localStorage och visa direkt
        localStorage.setItem('steps', steps);
        loadSteps(); // Ladda om för att visa aktuella steg
    } else {
        stepsResult.innerHTML = "Ange ett antal steg.";
    }
}

// Funktion för att spåra kalorier och spara dem
function trackCalories() {
    const calories = document.getElementById("calories").value;
    const caloriesResult = document.getElementById("caloriesResult");

    if (calories) {
        caloriesResult.innerHTML = `Du har ätit ${calories} kalorier idag.`;
        
        // Spara kalorier i localStorage och visa direkt
        localStorage.setItem('calories', calories);
        loadCalories(); // Ladda om för att visa aktuella kalorier
    } else {
        caloriesResult.innerHTML = "Ange ett kaloriantal.";
    }
}

// Funktion för att toggla credits-popup
function toggleCredits() {
    const popup = document.getElementById('creditsPopup');
    popup.classList.toggle('hidden'); // Toggle visibility of the popup
}

// Initiera sektionerna när sidan laddas
window.addEventListener('load', showSection);
window.addEventListener('hashchange', showSection);
