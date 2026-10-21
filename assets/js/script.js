 var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 0
});


const botaoMenu = document.getElementById("menu-mobile");
const menu = document.querySelector(".conteudo-direita-nav");
const links = document.querySelectorAll("#links-nav a");

botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");

    botaoMenu.classList.toggle("ativo", aberto);
    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("aberto");
        botaoMenu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
});
