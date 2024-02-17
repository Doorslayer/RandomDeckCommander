//Author: Kaylehb Edward T. States
//Date: 2023-04-27
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
            console.log(card.name);
            sessionStorage.setItem('card', card.name);
            if(!(card.layout == "transform" || card.layout == "modal_dfc")) {
                document.getElementById("cardImage").src = card.image_uris.normal;
            } else{
                document.getElementById("cardImage").src = card.card_faces[0].image_uris.normal;
                document.getElementById("cardImage2").src = card.card_faces[1].image_uris.normal;
            }
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

function skip() {
    if (parseInt(sessionStorage.getItem('skips')) >= 1) {
        sessionStorage.setItem('skips', parseInt(sessionStorage.getItem('skips')) - 1);
        document.getElementById("cardImage").src = "../images/Loading.png";
        nextCard();
    }
}

function addSingle() {
    document.getElementById("cardImage").src = "../images/Loading.png";
    document.getElementById("decklist").textContent = document.getElementById("decklist").textContent + 1 + " " + sessionStorage.getItem('card') + "\n";
    
    nextCard();
}

function addDouble() {
    if (parseInt(sessionStorage.getItem('doubles')) >= 1) {
        sessionStorage.setItem('doubles', parseInt(sessionStorage.getItem('doubles')) - 1);
        document.getElementById("cardImage").src = "../images/Loading.png";
        document.getElementById("decklist").textContent = document.getElementById("decklist").textContent + 2 + " " + sessionStorage.getItem('card') + "\n";
        nextCard();
    }
}

function addTriple() {
    if (parseInt(sessionStorage.getItem('triples')) >= 1) {
        sessionStorage.setItem('triples', parseInt(sessionStorage.getItem('triples')) - 1);
        document.getElementById("cardImage").src = "../images/Loading.png";
        document.getElementById("decklist").textContent = document.getElementById("decklist").textContent + 3 + " " + sessionStorage.getItem('card') + "\n";
        nextCard();
    }
}

function addPlayset() {
    if (parseInt(sessionStorage.getItem('playsets')) >= 1) {
        sessionStorage.setItem('playsets', parseInt(sessionStorage.getItem('playsets')) - 1);
        document.getElementById("cardImage").src = "../images/Loading.png";
        document.getElementById("decklist").textContent = document.getElementById("decklist").textContent + 4 + " " + sessionStorage.getItem('card') + "\n";
        nextCard();
    }
}