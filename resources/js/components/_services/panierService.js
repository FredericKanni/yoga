import { apiServices } from './api.services'
import { EventBus } from '../_helpers/event.bus'

export const panierService = {
    addToPanier,
    basketLen,
    basketSizeRecup,
    getCurrentBasket,
}

function addToPanier(prestation, placeNbr) {
    // let basket = localStorage.getItem("currentBasket");

    //fait les modif dans localstorage
    // updateLocalStorage(product, quantity, quantityMax);
    updateLocalStorage(prestation, placeNbr);

}

function getCurrentBasket() {
    let basket = localStorage.getItem("currentBasket");

    if (!basket) {
        basket = {}
    } else {
        basket = JSON.parse(basket);
    }



    return basket
}


/**
 * modifie le local storage
 */
function updateLocalStorage(prestation, placeNbr) {
    let basket = getCurrentBasket()
    let qt = 0
        // console.log(prestation)
    prestation = prestation.data
    if (!_.hasIn(basket, buildKey(prestation))) {

        basket[buildKey(prestation)] = {

            id: prestation.id,
            name: prestation.name,
            prix: prestation.prix,
        }

        //quantite que l on veut rajouter en creant
        qt = parseInt(placeNbr)
    } else {
        console.log('update')
            //qt en localstorage +  //quantite que l on veut rajouter en update
        qt = basket[buildKey(prestation)].placeNbr + parseInt(placeNbr)
    }

    basket[buildKey(prestation)].placeNbr = qt

    storeBasket(basket)
        // let text = 'le bus marche'
        // EventBus.$emit('toto', text);
}

//save basket set current basket
function storeBasket(basket) {
    localStorage.setItem("currentBasket", JSON.stringify(basket))

    basketLen(basket)

}


//construit le nom de la cle prestation
function buildKey(prestation) {

    return 'prestation_' + prestation.id;
}

//recupere la longuer de basket
function basketLen(basket) {
    let basketSize = _.toPairs(basket).length;
    //nom du bus  + variable va vers composant panier
    EventBus.$emit('BasketSize', basketSize);
}

//recupere la quantite de basket size
function basketSizeRecup() {
    let basketSize = _.toPairs(getCurrentBasket()).length;

    return basketSize
}