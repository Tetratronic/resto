import nav from './nav';
import home from './Home';
import menu from './Menu';
import './style.css';

const content = document.querySelector("#content");
const variablecontent = document.createElement("div");

content.appendChild(nav());

const menubtn = document.querySelector(".menu");

menubtn.addEventListener('click', ()=>{
    variablecontent.replaceChild(menu(), variablecontent.childNodes[0]);
})


variablecontent.appendChild(home());

content.appendChild(variablecontent);


