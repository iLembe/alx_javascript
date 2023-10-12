// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form field values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    // Validate form fields
    if (name === '' || email === '') {
        alert('Please fill in all required fields.');
    } else {
        // Display success message
        alert('Form submitted successfully!');
        // You can also choose to submit the form here with form.submit()
    }
}

// Attach the form submission handler to the form's submit event
document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);
