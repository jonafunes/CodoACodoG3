
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
