function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Alterna o texto do botão entre "Modo Claro" e "Modo Escuro"
    if (document.body.classList.contains("dark-mode")) {
        this.textContent = "Modo Claro";
    } else {
        this.textContent = "Modo Escuro";
    }
});
