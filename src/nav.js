function menu() {
  const list = document.createElement("ul");
  list.classList.add("navmenu");

  const home = document.createElement("li");
  const homebtn =document.createElement("button");
  homebtn.textContent = "Home";
  homebtn.classList.add("navbutton");
  home.appendChild(homebtn);
  list.appendChild(home);

  const menu = document.createElement("li");
  const menubtn =document.createElement("button");
  menubtn.textContent = "Menu";
  menubtn.classList.add("navbutton");
  menu.appendChild(menubtn)
  list.appendChild(menu);

  const about = document.createElement("li");
  const aboutbtn = document.createElement("button");
  aboutbtn.textContent = "About";
  aboutbtn.classList.add("navbutton")
  about.appendChild(aboutbtn);
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
