const BASEURL = 'http://127.0.0.1:5000';
let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let lastname = document.getElementById("lastname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  console.log("Name:", name.value);
  console.log("Lastname:", lastname.value);
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  // procesar y mandar a API
  register()
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
 * Function para loguearse 
 */
async function register(){
  //Buscamos en el servidor la cuenta
  const name = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const body = {nombre: name.value, apellido: lastname.value,email: email.value, password: password.value}

  console.log(body)

  let response = await fetchData(`${BASEURL}/api/register`, 'POST', body);
  if(response.message === 'Usuario creada con exito'){
    Swal.fire({
      title: 'Perfecto!',
      text: response.message,
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })
    window.location.href('/login')
  } else {
    Swal.fire({
      title: 'Error!',
      text: response.message,
      icon: 'error',
      confirmButtonText: 'Cerrar'
    })
  }
}
