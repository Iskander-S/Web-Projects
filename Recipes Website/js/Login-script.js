const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form inputs
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validate Username
    if (username.value.trim().length < 3) {
        isValid = false;
        username.nextElementSibling.textContent = 'Username must be at least 3 characters long.';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        isValid = false;
        email.nextElementSibling.textContent = 'Please enter a valid email address.';
    }

    // Validate Password
    if (password.value.trim().length < 6) {
        isValid = false;
        password.nextElementSibling.textContent = 'Password must be at least 6 characters long.';
    }

    // Submit the form if all fields are valid
    if (isValid) {
        alert('Form submitted successfully!');
        this.submit(); // Proceed with form submission
    }
});

document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form inputs
    const email = document.getElementById('signInEmail');
    const password = document.getElementById('signInPassword');
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        isValid = false;
        email.nextElementSibling.textContent = 'Please enter a valid email address.';
    }

    // Validate Password
    if (password.value.trim() === '') {
        isValid = false;
        password.nextElementSibling.textContent = 'Password is required.';
    }

    // Submit the form if all fields are valid
    if (isValid) {
        alert('Sign-in successful!');
        this.submit(); // Proceed with form submission
    }
});