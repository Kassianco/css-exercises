var submenu = document.getElementById('submenu')
var submenu2 = document.getElementById('submenu2')
var menuList = document.getElementById('menuList')
tl = new TimelineMax

function openSubmenu() {
  tl.to(menuList, 1, {x:-80})
  submenu.classList.toggle('active')
}

function openSubmenu2 () {
  submenu2.classList.toggle('active')
}

function back() {
  
}