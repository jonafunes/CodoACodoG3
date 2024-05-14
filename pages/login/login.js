let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  location.href ="/";
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  // procesas y mandar a API
});