function revealMenu() {
  document.getElementById("menu").className = "menu";
  const menuItems = document.querySelectorAll(".menu__item a")
  menuItems.forEach(item => {
    if (item.pathname === document.location.pathname) {
      item.classList.add("menu__item--activePage")
    }
  });
}

function closeMenu() {
  document.getElementById("menu").classList.add("menu--hidden");
}
