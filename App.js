// Récupération des éléments du DOM
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");


// Gestionnaire d'événements pour les liens de navigation
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Validation du formulaire de contact
const form = document.querySelector("form");
const nameInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Votre message est envoyé");

  // Validation des champs de saisie
  //let isValid = true;
  if (valider()) return;

  function valider() {
  if (nameInput.value === " ") {
    alert("Veuillez saisir votre nom.");
    return false;
  } else {
    alert.textContent = "";
    return true;
  }
  if (emailInput.value === "") {
    alert.textContent = "Veuillez saisir votre adresse e-mail.";
    isValid = false;
  } else if (!isValidEmail(emailInput.value())) {
    alert.textContent = "Veuillez saisir une adresse e-mail valide.";
    isValid = false;
  } else {
    alert.textContent = "";
  }
  if (messageInput.value === "") {
    alert.textContent = "Veuillez saisir votre message";
    isValid = false;
  } else {
    alert.textContent = "";
  }
 
}})

// Fonction utilitaire pour la validation d'adresse e-mail
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
