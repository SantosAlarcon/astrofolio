window.addEventListener("load", () => {
    const header = document.querySelector(".header__container");
    header?.classList.remove("preload");
    const rightHeader = document.querySelector(".header__right");
    const menu = document.querySelector(".mobile__menu__button");
    const hamburger = document.querySelector(".mobile__menu__hamburger");

    rightHeader.hidden = true;

    menu.addEventListener("click", () => {
        menu.classList.toggle("open");
        hamburger.classList.toggle("opened");

        rightHeader.hidden = !rightHeader.hidden;
    });

});

