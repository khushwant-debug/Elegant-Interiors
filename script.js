// ======= Preloader =======
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// ======= Dark Mode Toggle =======
const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const mode = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", mode);
  toggleBtn.textContent = mode === "dark" ? "☀️" : "🌙";
});

// ======= Shrink Header on Scroll =======
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("shrink", window.scrollY > 50);
});

// ======= Scroll-To-Top Button =======
const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======= Contact Form Validation =======
const contactForm = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    messageBox.textContent = "Please fill in all fields.";
    messageBox.style.color = "red";
  } else {
    messageBox.textContent = "Thank you! We'll get back to you soon.";
    messageBox.style.color = "green";
    this.reset();
  }

  messageBox.classList.remove("hidden");
});

// ======= AOS Animation Init =======
if (typeof AOS !== "undefined") {
  AOS.init({ duration: 1000 });
}

// ======= GLightbox Init =======
if (typeof GLightbox !== "undefined") {
  GLightbox({ selector: ".glightbox" });
}

