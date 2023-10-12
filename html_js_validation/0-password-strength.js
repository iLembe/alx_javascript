// Function to validate the password
function validatePassword() {
    var password = document.getElementById('password').value;
    var errorElement = document.getElementById('error');
  
    var lengthRegex = /.{8,}/; // At least 8 characters
    var uppercaseRegex = /[A-Z]/; // At least one uppercase letter
    var lowercaseRegex = /[a-z]/; // At least one lowercase letter
    var digitRegex = /\d/; // At least one digit
    var specialCharRegex = /[!@#\$%^&*]/; // At least one special character
  
    if (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    ) {
      errorElement.textContent = ''; // Clear any previous error message
      return true; // Password is valid
    } else {
      errorElement.textContent = 'Password does not meet the criteria !';
      return false; // Password is invalid
    }
  }
  
  // Attach the validation function to the form's submit event
  document.getElementById('passwordForm').addEventListener('submit', function (event) {
    if (!validatePassword()) {
      event.preventDefault(); // Prevent form submission if the password is invalid
    }
  });
  