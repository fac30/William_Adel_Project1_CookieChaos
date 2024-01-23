document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Display confirm message
    document.getElementById("messageOverlay").style.display = "flex";
  });

function hideMessage() {
  //Remove confirm message
  document.getElementById("messageOverlay").style.display = "none";
  //Reset form
  document.getElementById("contactForm").reset();
}

document
  .getElementById("closeButton")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      //Remove confirm message
      document.getElementById("messageOverlay").style.display = "none";
      //Reset form
      document.getElementById("contactForm").reset();
    }
  });
  