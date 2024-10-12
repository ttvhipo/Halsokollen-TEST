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
            loadSteps();
        } else if (hash === '#kaloriraknare') {
            loadCalories();
        }
    }
}

// Funktion för att ladda sparade steg
function loadSteps() {
    const stepsResult = document.getElementById("stepsResult");
    const steps = localStorage.getItem('steps');
    
    if (steps) {
        stepsResult.innerHTML = `Du har tidigare registrerat ${steps} steg.`;
    } else {
        stepsResult.innerHTML = "Inga tidigare steg registrerade.";
    }
}

// Funktion för att ladda sparade kalorier
function loadCalories() {
    const caloriesResult = document.getElementById("caloriesResult");
    const calories = localStorage.getItem('calories');
    
    if (calories) {
        caloriesResult.innerHTML = `Du har tidigare registrerat ${calories} kalorier.`;
    } else {
        caloriesResult.innerHTML = "Inga tidigare kalorier registrerade.";
    }
}

// Övriga funktioner (calculateBMI, trackSteps, trackCalories, toggleCredits) förblir oförändrade...

