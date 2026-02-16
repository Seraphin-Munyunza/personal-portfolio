const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusText.textContent = "✅ Message sent successfully! (Demo only)";
  statusText.style.color = "green";

  form.reset();
});
