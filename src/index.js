function showSubmenu() {
    const submenu = document.getElementsByClassName("menuSub")[0];
    submenu.style.display = "block";

    populateCategories('Top');
    populateCategories('Additional');
}
  
function hideSubmenu() {
    const submenu = document.getElementsByClassName("menuSub")[0];
    submenu.style.display = "none";

    if (activeMenuItem) {
        activeMenuItem.classList.remove("menuMainItemActive");
    }
    activeMenuItem = null;
}
  
/*
    Sets the background when the menu is active.
*/
let activeMenuItem = null;

function onMenuItemMouseEnter(item) {

    // "Deactivate" the prior menu item.
    if (activeMenuItem) {
        activeMenuItem.classList.remove("menuMainItemActive");
    }
    activeMenuItem = item;
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