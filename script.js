// =========================================
// PASTE YOUR MAIN WEBSITE LINK BELOW
// Example: const MAIN_WEBSITE_URL = "https://yourwebsite.com";
// =========================================
const MAIN_WEBSITE_URL = "https://your-main-website-link.com";

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const tripPopup = document.getElementById("tripPopup");
const closePopup = document.getElementById("closePopup");
const popupOptions = document.querySelectorAll(".popup-option");

let redirectTimer;
let popupShown = false;

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

function redirectToMainWebsite() {
  if (MAIN_WEBSITE_URL && MAIN_WEBSITE_URL !== "https://your-main-website-link.com") {
    window.location.href = MAIN_WEBSITE_URL;
  } else {
    alert("Paste your real main website link inside script.js to activate auto-redirect.");
  }
}

function hidePopup() {
  if (!tripPopup) return;
  tripPopup.classList.remove("active");
  tripPopup.setAttribute("aria-hidden", "true");
  clearTimeout(redirectTimer);
}

function showPopup() {
  if (!tripPopup || popupShown) return;
  popupShown = true;
  tripPopup.classList.add("active");
  tripPopup.setAttribute("aria-hidden", "false");

  // Redirect after 3 seconds if user does nothing.
  redirectTimer = setTimeout(() => {
    redirectToMainWebsite();
  }, 3000);
}

setTimeout(showPopup, 10000);

if (closePopup) {
  closePopup.addEventListener("click", hidePopup);
}

if (closePopup) {
  closePopup.addEventListener("click", hidePopup);
}

popupOptions.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedChoice = button.dataset.choice;

    if (selectedChoice === "honeymoon") {
      window.location.href = "honeymoon-booking.html";
    } else if (selectedChoice === "friends") {
      window.location.href = "friends-trip-booking.html";
    } else if (selectedChoice === "business") {
      window.location.href = "business-meeting-booking.html";
    }

    hidePopup();
  });
});

window.addEventListener("click", (event) => {
  if (event.target === tripPopup) {
    hidePopup();
  }
});
