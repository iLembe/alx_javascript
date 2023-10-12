// Function to validate the email format
function validateEmail() {
    var email = document.getElementById('email').value;
    var errorElement = document.getElementById('error');
    
    // Regular expression for email validation
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(email)) {
        errorElement.textContent = ''; // Clear any previous error message
        return true; // Email is valid
    } else {
        errorElement.textContent = 'Please enter a valid email address.';
        return false; // Email is invalid
    }
}

// Attach the validation function to the form's submit event
document.getElementById('emailForm').addEventListener('submit', function (event) {
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission if the email is invalid
    }
});
