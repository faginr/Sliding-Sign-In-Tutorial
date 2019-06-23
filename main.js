const signUpButton = document.querySelector("#signUp");
const signInButton = document.querySelector("#signIn");
const container = document.querySelector("#kontainer");

signUpButton.addEventListener("click", () => container.classList.add("right-panel-active"));

signInButton.addEventListener("click", () => container.classList.add("right-panel-active"));

