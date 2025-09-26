document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        console.log('Username:', username);
        console.log('Password:', password);
        alert('Login successful!');
    } else {
        alert('Please fill out all fields.');
    }
});