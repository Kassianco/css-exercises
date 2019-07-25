var menuBtn = document.getElementById('btnMenu')
var menu = document.getElementById('menu')
var gridBtn = document.getElementById('gridBtn')
var listBtn = document.getElementById('listBtn')
var main = document.getElementById('mainList')
var head = document.getElementById('head')
var nav = document.getElementById('viewSelect')

var img = document.getElementsByClassName('item-img')

menuBtn.addEventListener('click', openMenu)

tl = new TimelineMax

tl.from(head, 1, {opacity: 0, y: -100})
  .from(nav, 1, {opacity:0})
  .from(main, 1, {opacity: 0})

//open menu
function openMenu() {
  menu.classList.toggle('open-menu')
  console.log('helloooo')
}


// display grid or list
function gridView() {
  gridBtn.classList.add('selected')
  listBtn.classList.remove('selected')

  main.classList.add('grid-view')
  // img.classList.add('grid-img')
  main.classList.remove('main-list')

  console.log('selected')
}

listBtn.classList.add('selected')

function listView() {
  gridBtn.classList.remove('selected')
  listBtn.classList.add('selected')

  main.classList.remove('grid-view')
  main.classList.add('main-list')

}