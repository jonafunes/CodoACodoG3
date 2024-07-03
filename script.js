const BASEURL = 'http://127.0.0.1:5000';
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


function isLogued(){
    const isLogued = localStorage.getItem(auth)
    const user = localStorage.getItem(user)
    userLogedDiv = document.querySelector('.userLoged');
    if (isLogued){
        userLogedDiv.style.display = 'block';
        userLogedDiv.innerHTML = '<p>Bienvenido,'+user+'</p>';
    } else {
        userLogedDiv.style.display = 'none';
    }
}
// Función para expandir el marco al pasar el cursor sobre el botón de usuario
function expandFrame() {
    document.querySelector('.user-frame').style.width = '5px'; // Cambia el ancho del marco
}

// Función para colapsar el marco al quitar el cursor del botón de usuario
function collapseFrame() {
    document.querySelector('.user-frame').style.width = '0'; // Restaura el ancho del marco
}


// Función para abrir la ventana emergente correspondiente
function openPopup(popupId) {
    var popup = document.getElementById(popupId + '-popup');
    popup.style.display = 'block';
}

// Función para cerrar la ventana emergente
function closePopup(popupId) {
    var popup = document.getElementById(popupId + '-popup');
    popup.style.display = 'none';
}

// Función para cambiar el color del botón cuando se pasa el mouse por encima
function changeButtonColor(btnId, color) {
    var button = document.getElementById(btnId);
    button.style.backgroundColor = color;
}

// Restablecer el color original del botón cuando el mouse sale de encima
function resetButtonColor(btnId, originalColor) {
    var button = document.getElementById(btnId);
    button.style.backgroundColor = originalColor;
}

 

function showSearch() {
    try {
        // Intenta redirigir al usuario a la página de inicio de sesión en tu repositorio
        window.location.href = "./pages/search.html" //pagina de servicios de busqueda no realizada aun.
    } catch(error) {
    // Implementa la lógica para mostrar la barra de búsqueda
    alert("Función de búsqueda aún no implementada");
}
}

function showLogin() {
    try {
    // Intenta redirigir al usuario a la página de inicio de sesión en tu repositorio
        window.location.href = "./pages/login/login.html"
    } catch(error) {
        // Si hay un error al intentar redirigir, muestra una alerta
        alert("No se pudo abrir la página de inicio de sesión: " + error);
    }
}

function showChart() {
    try {
    // Intenta redirigir al usuario a la página de inicio de sesión en tu repositorio
        window.location.href = "./Templates/compras.html"
    } catch(error) {
        // Si hay un error al intentar redirigir, muestra una alerta
        alert("No se pudo abrir la página de compras: " + error);
    }
}
