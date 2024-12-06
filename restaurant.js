const { mongerInventory } = require("./fishMonger")



const fishMenu = (pricePoint) => {

    const todaysFish = mongerInventory(pricePoint);

    let menuHTML = `<h1>Menu</h1>

<article class="menu">`;

console.log(todaysFish)
    todaysFish.forEach(fish => {
        menuHTML += `
<h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>`
    });
    
    menuHTML += `</article>`

    console.log(menuHTML)
    return menuHTML;

}

module.exports = { fishMenu }