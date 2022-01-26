function menuItemEnter() {
    const submenu = document.getElementsByClassName("menuSub")[0];
    submenu.style.display = "block";
}
  
function menuItemLeave() {
    const submenu = document.getElementsByClassName("menuSub")[0];
    submenu.style.display = "none";
}

document.addEventListener('DOMContentLoaded', (event) =>  {
    const menuItems = document.querySelectorAll(".menuMainItem");

    for (const menuItem of menuItems) {
        menuItem.onmouseenter = menuItemEnter;
        menuItem.onmouseleave = menuItemLeave;

        console.log(menuItem);
        console.log("Hello again");
    }
})