// Add 'loaded' class to body after 3 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 3000); // 3-second delay
});



document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 3000); // 3 seconds delay for the preloader
});











// Login form JavaScript file
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form form');
    const usernameInput = loginForm.querySelector('input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');

    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.querySelector('.alert-message');
    const alertCloseButton = document.getElementById('alert-close');
    const overlay = document.createElement('div');

    overlay.className = 'overlay';

    // Function to show the custom alert
    function showAlert(message) {
        alertMessage.textContent = message;
        customAlert.style.display = 'block';
        overlay.style.display = 'block';
        document.body.appendChild(overlay);
    }

    // Close the alert
    alertCloseButton.addEventListener('click', function () {
        customAlert.style.display = 'none';
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
    });

    // Function to handle form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the values of the inputs
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Validation
        if (!usernameValue) {
            showAlert('Please enter your username.'); // Use custom alert
            usernameInput.focus(); // Set focus on the username input
            return;
        }

        if (!passwordValue) {
            showAlert('Please enter your password.'); // Use custom alert
            passwordInput.focus(); // Set focus on the password input
            return;
        }

        // Here you can add code to handle the login logic (e.g., sending a request to your server)
        showAlert(`Logging in with Username: ${usernameValue} and Password: ${passwordValue}`); // Use custom alert

        // Reset the form or clear the inputs if needed
        usernameInput.value = '';
        passwordInput.value = '';
    });
});








//custom alert file
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form form');
    const usernameInput = loginForm.querySelector('input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');

    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.querySelector('.alert-message');
    const alertCloseButton = document.getElementById('alert-close');
    const overlay = document.createElement('div');
    
    overlay.className = 'overlay';

    // Function to show the custom alert
    function showAlert(message) {
        alertMessage.textContent = message;
        customAlert.style.display = 'block';
        overlay.style.display = 'block';
        document.body.appendChild(overlay);
    }

    // Close the alert
    alertCloseButton.addEventListener('click', function () {
        customAlert.style.display = 'none';
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
    });

    // Function to handle form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the values of the inputs
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Validation
        if (!usernameValue) {
            showAlert('Please enter your username.');
            usernameInput.focus(); // Set focus on the username input
            return;
        }

        if (!passwordValue) {
            showAlert('Please enter your password.');
            passwordInput.focus(); // Set focus on the password input
            return;
        }

        // Here you can add code to handle the login logic (e.g., sending a request to your server)
        showAlert(`Logging in with Username: ${usernameValue} and Password: ${passwordValue}`);

        // Reset the form or clear the inputs if needed
        usernameInput.value = '';
        passwordInput.value = '';
    });
});










//local storage file
// Login form JavaScript file
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form form');
    const usernameInput = loginForm.querySelector('input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');

    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.querySelector('.alert-message');
    const alertCloseButton = document.getElementById('alert-close');
    const overlay = document.createElement('div');

    overlay.className = 'overlay';

    // Function to show the custom alert
    function showAlert(message) {
        alertMessage.textContent = message;
        customAlert.style.display = 'block';
        overlay.style.display = 'block';
        document.body.appendChild(overlay);
    }

    // Close the alert
    alertCloseButton.addEventListener('click', function () {
        customAlert.style.display = 'none';
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
    });

    // Load the username from localStorage if it exists
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        usernameInput.value = savedUsername; // Fill the username input if saved
    }

    // Function to handle form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the values of the inputs
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Validation
        if (!usernameValue) {
            showAlert('Please enter your username.'); // Use custom alert
            usernameInput.focus(); // Set focus on the username input
            return;
        }

        if (!passwordValue) {
            showAlert('Please enter your password.'); // Use custom alert
            passwordInput.focus(); // Set focus on the password input
            return;
        }

        // Save the username to localStorage
        localStorage.setItem('username', usernameValue);

        // Here you can add code to handle the login logic (e.g., sending a request to your server)
        showAlert(`Logging in with Username: ${usernameValue} and Password: ${passwordValue}`); // Use custom alert

        // Reset the form or clear the inputs if needed
        usernameInput.value = '';
        passwordInput.value = '';
    });
});









//mock validation
// Login form JavaScript file
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form form');
    const usernameInput = loginForm.querySelector('input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');

    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.querySelector('.alert-message');
    const alertCloseButton = document.getElementById('alert-close');
    const overlay = document.createElement('div');

    overlay.className = 'overlay';

    // Function to show the custom alert
    function showAlert(message) {
        alertMessage.textContent = message;
        customAlert.style.display = 'block';
        overlay.style.display = 'block';
        document.body.appendChild(overlay);
    }

    // Close the alert
    alertCloseButton.addEventListener('click', function () {
        customAlert.style.display = 'none';
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
    });

    // Load the username from localStorage if it exists
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        usernameInput.value = savedUsername; // Fill the username input if saved
    }

    // Function to handle form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the values of the inputs
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Mock validation (Replace with actual validation logic)
        const validUsername = 'user123'; // Example username
        const validPassword = 'pass123'; // Example password

        // Validation
        if (!usernameValue) {
            showAlert('Please enter your username.'); // Use custom alert
            usernameInput.focus(); // Set focus on the username input
            return;
        }

        if (!passwordValue) {
            showAlert('Please enter your password.'); // Use custom alert
            passwordInput.focus(); // Set focus on the password input
            return;
        }

        // Check if the credentials are valid
        if (usernameValue === validUsername && passwordValue === validPassword) {
            // Save the username to localStorage
            localStorage.setItem('username', usernameValue);
            // Redirect to the landing page
            window.location.href = 'landing.html'; // Change to your actual landing page URL
        } else {
            showAlert('Invalid username or password.'); // Use custom alert
        }
    });
});




























//Sign up form JavaScript file
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const fullName = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phoneNumber = form.querySelector('input[type="tel"]').value.trim();
        const password = form.querySelector('input[type="password"]').value.trim();
        const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value.trim();
        const address = form.querySelector('input[type="text"]:nth-of-type(2)').value.trim();
        const field = form.querySelector('select').value;

        // Validate form fields
        if (!fullName || !email || !phoneNumber || !password || !confirmPassword || !address || field === "Select Field") {
            alert("Please fill out all fields correctly.");
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate password match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // All validations passed, handle form submission (e.g., send data to server)
        console.log("Form submitted successfully with the following data:");
        console.log({
            fullName,
            email,
            phoneNumber,
            password,
            address,
            field
        });

        // You can use fetch or XMLHttpRequest to send the data to your server here

        // Optionally, reset the form after submission
        form.reset();
        alert("Signup successful!"); // Alert user of successful signup
    });
});








//Sign up alert
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.querySelector('.alert-message');
    const alertClose = document.getElementById('alert-close');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input field values
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('phone-number').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();
        const address = document.getElementById('address').value.trim();
        const selectedField = document.getElementById('field-selection').value;

        // Check for empty fields
        if (!fullName || !email || !phoneNumber || !password || !confirmPassword || !address || selectedField === "Select Field") {
            showAlert('Please fill in all fields.');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            showAlert('Passwords do not match.');
            return;
        }

        // Proceed with form submission (you can add your AJAX or form submission logic here)
        // signupForm.submit();
        showAlert('Signup successful!'); // Placeholder for successful signup
    });

    // Function to show the alert
    function showAlert(message) {
        alertMessage.textContent = message;
        customAlert.style.display = 'flex'; // Show the alert
    }

    // Close the alert when clicking the close button
    alertClose.addEventListener('click', () => {
        customAlert.style.display = 'none';
    });
});
















//signup direction 
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.querySelector('.alert-message');
    const alertClose = document.getElementById('alert-close');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input field values
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('phone-number').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();
        const address = document.getElementById('address').value.trim();
        const selectedField = document.getElementById('field-selection').value;

        // Check for empty fields
        if (!fullName || !email || !phoneNumber || !password || !confirmPassword || !address || selectedField === "Select Field") {
            showAlert('Please fill in all fields.');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            showAlert('Passwords do not match.');
            return;
        }

        // If all validations pass, redirect to the landing page
        window.location.href = "landing.html"; // Change this to your actual landing page URL
    });

    // Function to show the alert
    function showAlert(message) {
        alertMessage.textContent = message;
        customAlert.style.display = 'flex'; // Show the alert
    }

    // Close the alert when clicking the close button
    alertClose.addEventListener('click', () => {
        customAlert.style.display = 'none';
    });
});






