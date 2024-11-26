function validate_form() {
    let valid = true;

    // Reset previous errors
    resetErrors();

    // First Name Validation (only alphabets and no spaces)
    const firstName = document.getElementById('first_name');
    if (!/^[a-zA-Z]+$/.test(firstName.value)) {
        document.getElementById('first_name_error').textContent = "First name must contain only alphabets and no spaces.";
        firstName.classList.add("highlight");
        valid = false;
    }

    // Last Name Validation (only alphabets and no spaces)
    const lastName = document.getElementById('last_name');
    if (!/^[a-zA-Z]+$/.test(lastName.value)) {
        document.getElementById('last_name_error').textContent = "Last name must contain only alphabets and no spaces.";
        lastName.classList.add("highlight");
        valid = false;
    }

    // Email Validation (must contain @ and . with at least 3 characters after @ and 2 after .)
    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('email_error').textContent = "Email must contain '@' and '.' with valid characters after them.";
        email.classList.add("highlight");
        valid = false;
    }

    // Mobile Number Validation (must be 10 digits and only numbers)
    const phone = document.getElementById('phone');
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone.value)) {
        document.getElementById('phone_error').textContent = "Mobile number must be exactly 10 digits.";
        phone.classList.add("highlight");
        valid = false;
    }

    // Password Validation (8 characters, at least 1 capital letter, 1 number, and 1 special character)
    const password = document.getElementById('password');
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        document.getElementById('password_error').textContent = "Password must contain at least 8 characters, including a capital letter, a number, and a special character.";
        password.classList.add("highlight");
        valid = false;
    }

    // Confirm Password Validation (must match password)
    const confirmPassword = document.getElementById('confirm_password');
    if (confirmPassword.value !== password.value) {
        document.getElementById('confirm_password_error').textContent = "Passwords do not match.";
        confirmPassword.classList.add("highlight");
        valid = false;
    }

    return valid;
}

function resetErrors() {
    // Reset all error messages and remove highlight
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.textContent = '';
    });

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove("highlight");
    });
}

// Optional: Focus on a field to display the error message immediately
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        resetErrors();
    });
});
