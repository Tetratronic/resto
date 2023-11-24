import nav from './nav';
import home from './Home';
import './style.css';

const content = document.querySelector("#content");

content.appendChild(nav());
content.appendChild(home());

