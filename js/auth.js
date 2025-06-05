const STATIC_CREDENTIAL = {
      username: 'admin',
      password: 'rahasia',
    };

    const login = (username, password) => {
      if (username === STATIC_CREDENTIAL.username && password === STATIC_CREDENTIAL.password) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify({ username }));
        return { success: true };
      } else {
        return { success: false, message: 'Username / Password Salah' };
      }
    };

    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      loginButton.disabled = true;
      loginButton.textContent = 'Logging in...';
      errorMessage.style.display = 'none';
      errorMessage.textContent = '';

      // Simulate delay like async call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const result = login(username, password);

      if (result.success) {
        window.location.href = 'index.html'; // Redirect to dashboard or homepage
      } else {
        errorMessage.textContent = result.message;
        errorMessage.style.display = 'block';
      }

      loginButton.disabled = false;
      loginButton.textContent = 'Login';
    });
