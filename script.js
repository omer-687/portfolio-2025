// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop actual submission

    let alertBox = document.getElementById("alert-box");
    alertBox.classList.remove("d-none"); // Show alert
    setTimeout(() => alertBox.classList.add("d-none"), 3000); // Hide after 3 seconds
});
