// Pure js
window.addEventListener("load", function(){
const btn_burger = document.querySelector('[data-js="header-burger"]'),
      header = document.querySelector("header"),
      body = document.querySelector("body"),
      header_links = document.querySelectorAll(".navbar-link");

const burger = {
  toggle(e) {
    header.classList.toggle("header--opened");
    body.classList.toggle("lock");
  },
  close (e) {
    header.classList.remove("header--opened");
    body.classList.remove("lock");
  },
  open (e) {
    header.classList.add("header--opened");
    body.classList.add("lock");
  }
}

btn_burger.addEventListener("click", burger.toggle);
header_links.forEach(item => {
  item.addEventListener("click", burger.close)
});
document.addEventListener('click', function(e) {
  const menu = document.querySelector(".navbar-list");
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == btn_burger;
  const menu_is_active = header.classList.contains('header--opened');
  
  if (!its_menu && !its_btnMenu && menu_is_active) {
    burger.close()
  }
});
})

