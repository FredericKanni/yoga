import { apiServices } from './api.services'


export const panierService = {
    addToPanier,

}

function addToPanier(prestation) {
    console.log(prestation)
    let basket = getCurrentBasket()
        // updateLocalStorage(product, quantity, quantityMax);

    storeBasket(basket)
}

function getCurrentBasket() {
    let basket = localStorage.getItem("currentBasket");

    if (!basket) {
        console.log('nouveau panier')
        basket = {}
    } else {
        console.log('recuperation panier')
        basket = JSON.parse(basket);
    }
    return basket
}


//save basket set current basket
function storeBasket(basket) {

    localStorage.setItem("currentBasket", JSON.stringify(basket))


}


//construit le nom de la cle prestation
function buildKey(prestation) {
    return 'prestation_' + prestation.id;
}