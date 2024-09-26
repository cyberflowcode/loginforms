function ageStudent(input) {
    input.value = input.value.replace(/[^0-9]/g, ''); // Only allow numbers
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2); // Limit age to 2 digits
    }
    const age = Number(input.value);
    if (age < 1) {
        input.value = ''; // Prevent age below 1
    } else if (age > 99) {
        input.value = '99'; // Limit age to 99
    }
}

function validateText(inputField) {
    inputField.value = inputField.value.replace(/[^a-zA-Z\s]/g, ''); // Only allow letters and spaces
    inputField.value = inputField.value
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase()); // Capitalize first letter of each word
}

// Handle form submission with success message and redirect
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display success message
    alert("Form submitted successfully!");

    // Redirect to the success page after showing the success message
    window.location.href = "login.html";
});
