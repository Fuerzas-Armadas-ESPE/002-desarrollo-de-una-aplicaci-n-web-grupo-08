document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    var btn = document.getElementById('submitButton');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            // Add Bootstrap's validation styles to the form
            form.classList.add('was-validated');
            
            // If the form is valid, send the form data using EmailJS
            btn.value = 'Enviando...';

            const serviceID = 'default_service';
            const templateID = 'template_heoidp3';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Enviar Email';
                    document.getElementById('submitSuccessMessage').classList.remove('d-none');
                    document.getElementById('submitErrorMessage').classList.add('d-none');

                    // Reset the form after successful submission
                    form.reset();
                    form.classList.remove('was-validated');
                    
                    alert('Mensaje enviado con éxito!');
                }, (err) => {
                    btn.value = 'Enviar Email';
                    document.getElementById('submitSuccessMessage').classList.add('d-none');
                    document.getElementById('submitErrorMessage').classList.remove('d-none');

                    alert(JSON.stringify(err));
                });
        } else {
            // If the form is invalid, display error messages
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
