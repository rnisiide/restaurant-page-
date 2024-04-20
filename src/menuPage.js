import './style.css';

const menuPage = function () {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const h1Element = document.createElement('h1');
    h1Element.innerText = 'Menu';
    content.appendChild(h1Element);

    const imgElement = new Image();
    imgElement.src = Empanada;
    imgElement.classList.add('home_pic')
    //content.appendChild(imgElement);

    const h2Element = document.createElement('h2');
    h2Element.innerText = 'Delicious home made empanadas';
    //content.appendChild(h2Element);

    const pElement1 = document.createElement('p');
    pElement1.innerText = `We make delicious home made empanadas, with fresh ingredients following a traditional South American Recipe.`;
    //content.appendChild(pElement1);

    const pElement2 = document.createElement('p');
    pElement2.innerText = `All empanadas are made daily by hand, and baked in a high temperature stone oven, which preserves it's moistness and dough quality.`;
    //content.appendChild(pElement2);
}

export default menuPage;