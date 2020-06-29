import { apiServices } from './api.services'


export const panierService = {
    addToPanier,

}

function addToPanier(prestation, placeNbr) {
    // console.log(prestation)
    // console.log(placeNbr)
    // let basket = localStorage.getItem("currentBasket");

    //fait les modif dans localstorage
    // updateLocalStorage(product, quantity, quantityMax);
    updateLocalStorage(prestation, placeNbr);

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


/**
 * modifie le local storage
 */
function updateLocalStorage(prestation, placeNbr) {
    console.log(prestation)
    console.log(placeNbr)
    console.log('updateLocalStorage')
    let basket = getCurrentBasket()
    let qt = 0


    if (!_.hasIn(basket, buildKey(prestation))) {
        basket[buildKey(prestation)] = {
                id: prestation.id,
                name: prestation.name,
                prix: prestation.prix,
            }
            //quantite que l on veut rajouter en creant
        qt = parseInt(placeNbr)
    } else {
        //qt en localstorage +  //quantite que l on veut rajouter en update
        qt = basket[buildKey(prestation)].placeNbr + parseInt(placeNbr)
    }

    basket[buildKey(prestation)].placeNbr = qt

    storeBasket(basket)


}

//save basket set current basket
function storeBasket(basket) {
    console.log('storeBasket')
    localStorage.setItem("currentBasket", JSON.stringify(basket))


}


//construit le nom de la cle prestation
function buildKey(prestation) {
    return 'prestation_' + prestation.id;
}