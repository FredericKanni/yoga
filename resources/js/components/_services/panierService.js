import { apiServices } from './api.services'
import { EventBus } from '../_helpers/event.bus'

export const panierService = {
    addToPanier,
    basketLen,
    basketSizeRecup,
    getCurrentBasket,
    paiement,
    deleteFromPanier,
    plusItemPanier,
    minusItemPanier,

}

function addToPanier(prestation, placeNbr, quantityMax) {
    // let basket = localStorage.getItem("currentBasket");

    //fait les modif dans localstorage
    updateLocalStorage(prestation, placeNbr, quantityMax);

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
function updateLocalStorage(prestation, placeNbr, quantityMax) {
    let basket = getCurrentBasket()
    let qt = 0
        // console.log(prestation)



    if (!_.hasIn(basket, buildKey(prestation))) {

        basket[buildKey(prestation)] = {

            id: prestation.id,
            name: prestation.name,
            prix: prestation.prix,
            quantityMax: quantityMax,
        }

        //quantite que l on veut rajouter en creant
        qt = parseInt(placeNbr)


    } else {
        console.log('update')
            //qt en localstorage +  //quantite que l on veut rajouter en update
        qt = basket[buildKey(prestation)].placeNbr + parseInt(placeNbr)
    }


    //produit en localstorage plus qrand que celui en bdd
    if (qt > prestation.placesDispo) {
        console.log('stock insuffisant')
        qt = prestation.placesDispo
        console.log(qt)
    }
    // 
    //si qt plus petit que 10 ça saute le prochain if sinon ça set le quantity a 10
    //quantite que l on veut rajouter plus grand que 10
    if (qt > 10) {
        console.log('pas plus de 10 prestations')
        qt = 10
        console.log(qt)
    }




    basket[buildKey(prestation)].placeNbr = qt
        // TODO externaliser
        //todo
    if ((basket[buildKey(prestation)].placeNbr) == 0) {
        // _.unset(basket, buildKey(prestation))
        console.log(basket)
        console.log(buildKey(prestation))
    }






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

function deleteFromPanier(prestation) {
    let basket = getCurrentBasket()
    console.log(basket)
    console.log(buildKey(prestation))
        // removeItem()
    _.unset(basket, buildKey(prestation))

}


//TODO
// function removeItem(prestation) {

//     let basket = getCurrentBasket()
//     if ((basket[buildKey(prestation)].placeNbr) == 0) {
//         _.unset(basket, buildKey(prestation))
//     }
// }



function plusItemPanier(item) {
    buildKey(item)
    console.log(buildKey(item))

    if (item.placeNbr < item.quantityMax) {
        item.placeNbr++;
        updateLocalStorage(item, 1);
    }
}


function minusItemPanier(item) {
    buildKey(item)
    console.log(buildKey(item))

    item.placeNbr--;

    updateLocalStorage(item, -1);

}





function paiement(order) {

    // console.log(order)
    return apiServices.post('/api/basket/pay', {

        paiement: order.paiement

    })
}