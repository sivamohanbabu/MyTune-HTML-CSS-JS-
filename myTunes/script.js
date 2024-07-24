document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Example interactivity: Change button color on click
  const primaryBtn = document.querySelector(".primary-btn");
  if (primaryBtn) {
    primaryBtn.addEventListener("click", () => {
      primaryBtn.style.backgroundColor = "#ff0000"; // Change to red
    });
  }

  // Example interactivity: Display alert on secondary button click
  const secondaryBtn = document.querySelector(".secondary-btn");
  if (secondaryBtn) {
    secondaryBtn.addEventListener("click", () => {
      alert("Secondary button clicked!");
    });
  }
});
