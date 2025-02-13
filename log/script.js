// Toggle Password Visibility
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}

// Switch between login and signup views
document.getElementById('create-account-link').addEventListener('click', function() {
    document.querySelector('.login-container').classList.add('hidden');
    document.querySelector('.signup-container').classList.remove('hidden');
});

document.getElementById('back-to-home-link').addEventListener('click', function() {
    document.querySelector('.signup-container').classList.add('hidden');
    document.querySelector('.login-container').classList.remove('hidden');
});

// Form Validation and Authentication
document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[newUsername]) {
        alert('Username already exists!');
        return;
    }

    users[newUsername] = newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created successfully! You can now log in.');

    document.querySelector('.signup-container').classList.add('hidden');
    document.querySelector('.login-container').classList.remove('hidden');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] && users[username] === password) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
});
