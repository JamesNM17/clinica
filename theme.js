// ativa botão e salva tema no localStorage
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("theme-switch");

    // Verifica tema salvo
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
        checkbox.checked = true;
    }

    // altera tema ao clicar
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
});