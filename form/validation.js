function validate_form() {
	// Prevent form submission for validation
	event.preventDefault();

	// Get form values
	var firstName = document.getElementById('first_name').value;
	var lastName = document.getElementById('last_name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var password = document.getElementById('password').value;
	var confirmPassword = document.getElementById('confirm_password').value;

	// 1. Validate First Name and Last Name (only alphabets)
	var nameRegex = /^[A-Za-z]+$/;
	if (!nameRegex.test(firstName)) {
		alert("First Name must contain only alphabets.");
		return false;
	}
	if (!nameRegex.test(lastName)) {
		alert("Last Name must contain only alphabets.");
		return false;
	}

	// 2. Validate Email
	var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!emailRegex.test(email)) {
		alert("Please enter a valid email address.");
		return false;
	}

	// 3. Validate Mobile Number (only digits, 10 digits)
	var phoneRegex = /^[0-9]{10}$/;
	if (!phoneRegex.test(phone)) {
		alert("Mobile number must be exactly 10 digits.");
		return false;
	}

	// 4. Validate Password (at least 1 uppercase letter, 1 special character, 1 number)
	var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!passwordRegex.test(password)) {
		alert("Password must contain at least one capital letter, one special character, and one number.");
		return false;
	}

	// 5. Validate Confirm Password
	if (password !== confirmPassword) {
		alert("Password and Confirm Password do not match.");
		return false;
	}

	// If all validations pass
	alert("Form submitted successfully!");
	// You can submit the form here if needed
	// e.g., document.getElementById('signupForm').submit();
	return true;
}
