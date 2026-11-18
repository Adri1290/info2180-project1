
// Get the newsletter form
const newsletterForm = document.querySelector('.newsletter form');

// Get the email input field
const emailInput = document.getElementById('email');

// Get the message area
const message = document.querySelector('.message');

// Listen for form submission
newsletterForm.addEventListener('submit', function(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the email entered by the user
    const email = emailInput.value.trim();

    // Check if the email is empty or invalid
    if (email === '' || !emailInput.checkValidity()) {

        message.textContent = 'Please enter a valid email address.';

    } else {

        // Display the successful subscription message
        message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;

        // Clear the email input field
        emailInput.value = '';
    }

});

