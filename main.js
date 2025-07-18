let openMenu = document.querySelector(".open-menu")
let closeMenu = document.querySelector(".close-menu")
let containerMenu = document.querySelector(".flex-container-menu")

openMenu.addEventListener("click", () => {
    containerMenu.classList.toggle("visible")
})

