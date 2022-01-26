function showSubmenu() {
    const submenu = document.getElementsByClassName("menuSub")[0];
    submenu.style.display = "block";
}
  
function hideSubmenu() {
    const submenu = document.getElementsByClassName("menuSub")[0];
    submenu.style.display = "none";
}
  
document.addEventListener('DOMContentLoaded', (event) =>  {

    const menuItems = document.getElementsByClassName("menuMainItem");
    for (const menuItem of menuItems) {
      menuItem.onmouseenter = showSubmenu
    }
    
    const menu = document.getElementsByClassName("menu")[0];
    menu.onmouseleave = hideSubmenu
})