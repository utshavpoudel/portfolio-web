function initializeNavbar() {

    console.log("JavaScript loaded!");

    const menu = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    menu.addEventListener("click", () => {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menu.innerHTML = "✕";
        } else {
            menu.innerHTML = "☰";
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            menu.innerHTML = "☰";

        });

    });

}