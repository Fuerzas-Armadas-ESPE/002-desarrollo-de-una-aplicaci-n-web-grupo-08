document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        // Prevent form submission
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity()) {
            // If the form is valid, display success message
            document.getElementById('submitSuccessMessage').classList.remove('d-none');
            document.getElementById('submitErrorMessage').classList.add('d-none');
            
            // Optionally, send the form data here using AJAX or any other method
            
            // Reset the form after successful submission
            form.reset();
            form.classList.remove('was-validated');
        } else {
            // If the form is invalid, display error message
            document.getElementById('submitSuccessMessage').classList.add('d-none');
            document.getElementById('submitErrorMessage').classList.remove('d-none');
            
            // Add Bootstrap's validation styles to the form
            form.classList.add('was-validated');
        }
    }, false);
    
    // Ensure each field is validated on input change
    Array.from(form.elements).forEach(function(input) {
        input.addEventListener('input', function () {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        });
    });
});