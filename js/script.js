(function () {
  // var cx = "210b06286d70b46c7";
  var cx = "007019498718139788174";
  var gcse = document.createElement("script");
  gcse.type = "text/javascript";
  gcse.async = true;
  gcse.src =
    (document.location.protocol == "https:" ? "https:" : "http:") +
    "//cse.google.com/cse.js?cx=" +
    cx;
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(gcse, s);
})();
window.onload = function () {
  var title = "Enter keywords to search...";
  var textBox = document.querySelector("#gsc-i-id1");
  var button = document.querySelector(".gsc-search-button-v2 svg title");
  textBox.placeholder = title;
  textBox.title = title;
  button.innerHTHL = title;
};

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  loader.style.display = "none";
  content.style.display = "block";
});
// Check localStorage for dark mode setting
if (localStorage.getItem("darkmode") === "dark" || !localStorage.getItem("darkmode")) {
  // Apply the dark theme
  localStorage.setItem("darkmode", "dark"); // Set default to dark
  document.body.classList.add("dark-mode");
}

function toggleDarkMode() {
  if (localStorage.getItem("darkmode") === "dark") {
    // Switch to the light theme
    localStorage.setItem("darkmode", "light");
    document.body.classList.remove("dark-mode");
  } else {
    // Switch to the dark theme
    localStorage.setItem("darkmode", "dark");
    document.body.classList.add("dark-mode");
  }
}
