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
  
  location.href ="/";
});