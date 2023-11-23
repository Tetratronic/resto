function menu() {
  const list = document.createElement("ul");
  list.classList.add("navmenu");
  const home = document.createElement("li");
  home.textContent = "Home";
  list.appendChild(home);

  const menu = document.createElement("li");
  menu.textContent = "Menu";
  list.appendChild(menu);

  const about = document.createElement("li");
  about.textContent = "About";
  list.appendChild(about);

  return list;
}

function nav() {
  const container = document.createElement("div");
  container.classList.add("navbar");
  container.appendChild(menu());
  return container;
}

export default nav;
