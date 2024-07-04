const BASEURL = 'http://127.0.0.1:5000';

let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});

/**
 * Función para realizar una petición fetch con JSON.
 * @param {string} url - La URL a la que se realizará la petición.
 * @param {string} method - El método HTTP a usar (GET, POST, PUT, DELETE, etc.).
 * @param {Object} [data=null] - Los datos a enviar en el cuerpo de la petición.
 * @returns {Promise<Object>} - Una promesa que resuelve con la respuesta en formato JSON.
 */
async function fetchData(url, method, data = null) {
  const options = {
      method: method,
      headers: {
          'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
  };
  try {
    const response = await fetch(url, options);  // Realiza la petición fetch
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();  // Devuelve la respuesta en formato JSON
  } catch (error) {
    console.error('Fetch error:', error);
    alert('An error occurred while fetching data. Please try again.');
  }
}

/**
 * Función para loguearse
 */
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const body = { email: email, password: password };

    let response = await fetchData(`${BASEURL}/api/login`, 'POST', body);

    if (response.message === 'Authenticated') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('email', response.user.email);
      localStorage.setItem('name', response.user.name);
      console.log(response)
      window.location.href = '/';
    } else {
      Swal.fire({
        title: 'Error!',
        text: response.message,
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
    }
}
