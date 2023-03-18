let scoreGuest = document.getElementById("guest-board-js") ;
let scoreHome = document.getElementById("home-board-js") ;
let scoreG = 0 ;
let scoreH = 0 ;

scoreGuest.textContent = 0 ;
scoreHome.textContent = 0 ;

function btnGuestAdd1() {
    scoreG += 1;
    scoreGuest.textContent = scoreG ;
}

function btnGuestAdd2() {
    scoreG += 2;
    scoreGuest.textContent = scoreG ;

}

function btnGuestAdd3() {
    scoreG += 3;
    scoreGuest.textContent = scoreG ;

}

function btnHomeAdd1() {
    scoreH += 1;
    scoreHome.textContent = scoreH ;
}

function btnHomeAdd2() {
    scoreH += 2;
    scoreHome.textContent = scoreH ;
}

function btnHomeAdd3() {
    scoreH += 3;
    scoreHome.textContent = scoreH ;

}

function reset() {
    scoreG = 0;
    scoreH = 0;
    scoreHome.textContent = 0 ;
    scoreGuest.textContent = 0 ;
}

