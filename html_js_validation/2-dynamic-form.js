// Function to generate dynamic input fields
function generateInputFields(numFields) {
    var inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear previous input fields

    for (var i = 1; i <= numFields; i++) {
        var inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputField.placeholder = 'Field ' + i;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    var numFields = document.getElementById('numFields').value;
    var inputContainer = document.getElementById('inputContainer');
    var inputFields = inputContainer.getElementsByTagName('input');

    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === '') {
            alert('Please fill in all fields.');
            return; // Stop validation on the first empty field
        }
    }

    // If all fields are filled, allow form submission
    document.getElementById('dynamicForm').submit();
}

// Attach the dynamic input fields generation to the dropdown change event
document.getElementById('numFields').addEventListener('change', function () {
    var numFields = this.value;
    generateInputFields(numFields);
});

// Attach the form validation to the form's submit event
document.getElementById('dynamicForm').addEventListener('submit', validateForm);
