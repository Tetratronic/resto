function home(){
    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "Welcome to NoPhoud";
    container.appendChild(title);

    const text = document.createElement("p");
    text.textContent = "NoPhoud is a Decentralized restaurant where you can pick and choose your own combination of food using Mishcoins"
    container.appendChild(text);
    
    return container;
}

export default home;