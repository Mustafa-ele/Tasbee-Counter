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
