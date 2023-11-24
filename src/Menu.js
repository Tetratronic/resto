function menu(){
    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "NoPhoud Menu";
    container.appendChild(title);

    const menuItems = document.createElement("ul");

    const items = ["Meat", "Pasta", "Fish"];

    items.forEach((item) => {
        const element = document.createElement("li");
        element.textContent = item;
        menuItems.appendChild(element);
    })

    container.append(menuItems);

    return container;
}

export default menu;