document.querySelectorAll(".footer-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        let content = this.nextElementSibling;
        
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
