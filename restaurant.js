const { mongerInventory } = require("./fishMonger")



const fishMenu = (pricePoint) => {

    const todaysFish = mongerInventory(pricePoint);

    let menuHTML = `<h1>Menu</h1>`;

    todaysFish.forEach(fish => {
        menuHTML += `
        <article class="menu">
            <h2>${fish.species}</h2>
            <section class="menu__item">${fish.species} Soup</section>
            <section class="menu__item">${fish.species} Sandwich</section>
            <section class="menu__item">Grilled ${fish.species}</section>
        </article>`;
    });

    return menuHTML;

}

module.exports = { fishMenu }