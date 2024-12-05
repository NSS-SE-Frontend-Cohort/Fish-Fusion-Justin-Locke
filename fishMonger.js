const { boatInventory } = require("./fishingBoat.js")



const mongerInventory = (pricePoint) => {
    
    const freshCatch = boatInventory();
    
    const fishMongerSelection = freshCatch
        .filter(fish => fish.price <= 7.50 && fish.amount >= 10)
        .map(fish => {
            return {
                ...fish,
                amount: 10
            };
        });
    
    
    const finalSelection = fishMongerSelection
    .filter(fish => fish.price <= pricePoint)
    .map(fish => {
        return {
            ...fish,
            amount: fish.amount/2
        };
    })

    return finalSelection; 

}


module.exports = { mongerInventory }
