document.getElementById('registrationForm').addEventListener('click', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    const message = document.getElementById('message');
    if (password !== confirmPassword) {
      message.innerHTML = 'Passwords do not match!';
      return;
    }
  
    // Here you can add further validation or send the form data to a server
  
    // For example, displaying a success message:
    message.innerHTML = `Registration successful! Welcome, ${username}!`;
  });
  