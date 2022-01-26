function showSubmenu() {
    const submenu = document.getElementsByClassName("menuSub")[0];
    submenu.style.display = "block";
}
  
function hideSubmenu() {
    const submenu = document.getElementsByClassName("menuSub")[0];
    submenu.style.display = "none";
}
/*
    Sets the background when the menu is active.
*/
function onMenuItemMouseEnter(item) {
    item.classList.add("menuMainItemActive");
    showSubmenu();
}

document.addEventListener('DOMContentLoaded', (event) =>  {

    const menuItems = document.getElementsByClassName("menuMainItem");
    for (const menuItem of menuItems) {
      menuItem.onmouseenter = () => onMenuItemMouseEnter(menuItem);
    }

    const menu = document.getElementsByClassName("menu")[0];
    menu.onmouseleave = hideSubmenu
})