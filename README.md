# Educative.io Frontend Development - Build a Dropdown Menu

This is part of a module in the Frontend Development course.
Here, the instructor takes us through building a dropdown menu.

A few notes:
1. The placement of the div's is to eliminate some  unnecessary spaces around the menu items when we hove over the item.  I don't really understand this point and as the instructor indicates, it's a hack.
2. Along those same lines, a negative margin is used to eliminate a problem with the borders when you hover over a menu item.  The hover caused the menu item to shift.
3. Added the red and blue backgrounds to help find issues with addition of a submenu.  This did show that the left-most item border and the right-most item borders showed on hover when it wasn't suppose to?  See first-child:hover and last-child:hover properties in the CSS.
4. Class names were changed to "menu main" to distinguish between main and submenus.
5. When adding the javascript to handle the submenu's, the script for modifying the menuMainItem needs to go at the END of the HTML, use the 'defer' tag, or inside a document.onload() function: document.addEventListener('DOMContentLoaded', (event) =>  {})