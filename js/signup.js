document.querySelectorAll(".icon-password").forEach(icon => {
    icon.addEventListener("click", function () {
        let passwordInput = this.previousElementSibling;
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            this.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordInput.type = "password";
            this.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
});

