window.onload = init();

function init() {
    document.addEventListener('DOMContentLoaded', function() {
        sessionStorage.setItem('skips', localStorage.getItem('skips'));
        sessionStorage.setItem('doubles', localStorage.getItem('doubles'));
        sessionStorage.setItem('triples', localStorage.getItem('triples'));
        sessionStorage.setItem('playsets', localStorage.getItem('playsets'));

        nextCard();
    });
}

function nextCard() {
    //get random card
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let card = JSON.parse(xhttp.responseText);
            localStorage.setItem('card', card.name);
            document.getElementById("cardImage").src = card.image_uris.normal;
        }
    };
    xhttp.open("GET", "https://api.scryfall.com/cards/random?q=in%3Apaper+not%3Afunny+-t%3Abasic", true);
    xhttp.send();

    document.getElementById("skipButton").textContent = "Skip (" + sessionStorage.getItem('skips') + ")";
    document.getElementById("singleButton").textContent = "Single";
    document.getElementById("doubleButton").textContent = "Double (" + sessionStorage.getItem('doubles') + ")";
    document.getElementById("tripleButton").textContent = "Triple (" + sessionStorage.getItem('triples') + ")";
    document.getElementById("playsetButton").textContent = "Playsets (" + sessionStorage.getItem('playsets') + ")";
}