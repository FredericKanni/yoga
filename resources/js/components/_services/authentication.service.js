import { BehaviorSubject } from "rxjs";

// IMPORTATION DES ROLES DEPUIS Role js
import { Role } from '../_helpers/role';

import { requestOptions } from "../_helpers/request-options";
import { handleResponse } from "../_helpers/handle-response";


const currentUserSubject = new BehaviorSubject(
    JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
    connected,
    login,
    logout,
    isAdmin,
    isProf,
    getCurrentUser,



    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value;
    }
};

function getCurrentUser() {
    const user = localStorage.getItem("currentUser");
    /* user = JSON.parse(user) */
    return user

}

function connected() {
    const user = localStorage.getItem("currentUser");
    return !_.isNull(user)
}

function login(user) {
    return fetch(
            `/api/login`,
            requestOptions.post(user)
        )
        .then(handleResponse)
        .then(({ data }) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(data));
            currentUserSubject.next(data);

            return data;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    currentUserSubject.next(null);


}



// ici recherche le role du currentUser et ont recup son user role.name(ex: role.producteur)
function role() {
    let user = localStorage.getItem("currentUser");
    if (!user) {
        return null
    }
    //console.log(user)
    user = JSON.parse(user)
    return user.role.name
}


//Function qui vérifie le role retourné dans le currentUser appartient bien aux roles dans role.js

function isAdmin() {
    //console.log(role())
    return role() === Role.Admin
}

function isProf() {
    //console.log(role())
    return role() === Role.Prof
}