const header = document.querySelector(".header");
const burger = header.querySelector(".burger__menu");
const burgerIcon = header.querySelector(".burger-menu");


burger.addEventListener("click", function() {
    header.classList.toggle("header--mobile");

    if (header.classList.contains("header--mobile")) {
          burgerIcon.src = "files/burger-close.png"
    } else {
        burgerIcon.src = "files/header-burger.png"
    }

  

})