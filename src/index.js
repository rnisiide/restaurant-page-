import homePage from "./homePage";
import menuPage from "./menuPage";
import aboutPage from "./aboutPage";
homePage();

const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', homePage);

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', menuPage);

const aboutButton = document.getElementById('about-button');
aboutButton.addEventListener('click', aboutPage);




