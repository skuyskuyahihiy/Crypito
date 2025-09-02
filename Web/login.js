document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailOrUsername = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      // Add your login validation or authentication logic here
      if (!emailOrUsername || !password) {
        alert('Please enter your email/username and password.');
        return;
      }
      alert('Login successful!');
      window.location.href = 'home.html';
    });
  }
});
