function enterBinder() {
  const container = document.querySelector(".intro-container");

  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle-burst");
  container.appendChild(sparkle);

  container.classList.add("sparkle-out");

  setTimeout(() => {
    // 👇 FIX THIS PATH TO MATCH YOUR ACTUAL FILE LOCATION
    window.location.href = "about-me.html"; // or "profile-binder/about-me.html"
  }, 1000);
}
