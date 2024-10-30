let count = 0; // Initialize counter
const maxCount = 836; // Set maximum count

// Get the button and counter display elements
const tapButton = document.getElementById('tapButton');
const resetButton = document.getElementById('resetButton'); // Get the reset button
const counterDisplay = document.getElementById('counter');

// Function to update the counter display
function updateCounter() {
    counterDisplay.textContent = count; // Update the displayed count
}

// Add click event listener to the tap button
tapButton.addEventListener('click', function() {
    if (count < maxCount) { // Check if count is less than maxCount
        count++; // Increment the count
        updateCounter(); // Update the display
    } else {
        alert("Maximum count reached!"); // Alert if maximum is reached
    }
});

// Add click event listener to the reset button
resetButton.addEventListener('click', function() {
    count = 0; // Reset the count
    updateCounter(); // Update the display
});

// Add event listener for key presses
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Check if Enter key is pressed
        tapButton.click(); // Simulate button click
    }
});

let count2 = 0; // Initialize second counter
const maxCount2 = 1000; // Set maximum count for second counter

// Get elements for the second counter
const tapButton2 = document.getElementById('tapButton2');
const resetButton2 = document.getElementById('resetButton2');
const counterDisplay2 = document.getElementById('counter2');

// Function to update the second counter display
function updateCounter2() {
    counterDisplay2.textContent = count2;
}

// Add click event listener for the second tap button
tapButton2.addEventListener('click', function() {
    if (count2 < maxCount2) { // Check if count2 is less than maxCount2
        count2++;
        updateCounter2();
    } else {
        alert("Maximum count reached for Counter 2!");
    }
});

// Add click event listener for the second reset button
resetButton2.addEventListener('click', function() {
    count2 = 0; // Reset count for second counter
    updateCounter2();
});

