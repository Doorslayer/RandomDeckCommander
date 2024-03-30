//Author: Kaylehb Edward T. States
//Date: 2024-03-29
window.onload = init();

function init() {
    document.addEventListener('DOMContentLoaded', function() {
        sessionStorage.setItem('COptions', localStorage.getItem('COptions'));
        sessionStorage.setItem('NOptions', localStorage.getItem('NOptions'));

        getCommander();
    });
}

function getCommander() {
    //setup images
    for (let i = 0; i < parseInt(sessionStorage.getItem('COptions')); i++){
        let image = document.createElement("img");
        image.id = "cardImageA" + i;
        document.getElementById("imageRow").appendChild(image);
        let imageB = document.createElement("img");
        imageB.id = "cardImageB" + i;
        document.getElementById("imageRow").appendChild(imageB);
    }
    //setup buttons
    for (let i = 0; i < parseInt(sessionStorage.getItem('COptions')); i++){
        let btn = document.createElement("button");
        btn.onclick = function() { addCommander(i); };
        document.getElementById("options").appendChild(btn);
    }
    //get random commanders
    for (let i = 0; i < parseInt(sessionStorage.getItem("COptions")); i++) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let card = JSON.parse(xhttp.responseText);
                let cIdent = card.color_identity;
                if (cIdent == []){sessionStorage.setItem('cardIdent' + i, 'c')}
                else  {
                    sessionStorage.setItem('cardIdent' + i, "")
                    if (cIdent.includes('W')) {sessionStorage.setItem('cardIdent' + i, sessionStorage.getItem('cardIdent' + i) + 'W')}
                    if (cIdent.includes('U')) {sessionStorage.setItem('cardIdent' + i, sessionStorage.getItem('cardIdent' + i) + 'U')}
                    if (cIdent.includes('B')) {sessionStorage.setItem('cardIdent' + i, sessionStorage.getItem('cardIdent' + i) + 'B')}
                    if (cIdent.includes('R')) {sessionStorage.setItem('cardIdent' + i, sessionStorage.getItem('cardIdent' + i) + 'R')}
                    if (cIdent.includes('G')) {sessionStorage.setItem('cardIdent' + i, sessionStorage.getItem('cardIdent' + i) + 'G')}
                }
                displayCard(card, i)
            }
        };
        xhttp.open("GET", "https://api.scryfall.com/cards/random?q=in%3Apaper+not%3Afunny+is%3Acommander+-t:background", true);
        xhttp.send();
    }
}

function nextCard() {
    //setup images
    for (let i = 0; i < parseInt(sessionStorage.getItem('NOptions')); i++){
        let image = document.createElement("img");
        image.id = "cardImageA" + i;
        document.getElementById("imageRow").appendChild(image);
        let imageB = document.createElement("img");
        imageB.id = "cardImageB" + i;
        document.getElementById("imageRow").appendChild(imageB);
    }
    //setup buttons
    for (let i = 0; i < parseInt(sessionStorage.getItem('NOptions')); i++){
        let btn = document.createElement("button");
        btn.onclick = function() { addSingle(i); };
        document.getElementById("options").appendChild(btn);
    }
    //get random cards
    for (let i = 0; i < sessionStorage.getItem("NOptions"); i++) {
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let card = JSON.parse(xhttp.responseText);
                displayCard(card, i)
            }
        };  
        xhttp.open("GET", "https://api.scryfall.com/cards/random?q=in%3Apaper+not%3Afunny+-t%3Abasic+id<=" + sessionStorage.getItem("ident"), true);
        xhttp.send();
    }  
}

function displayCard(card, i) {
    console.log(card.name);
    sessionStorage.setItem('card' + i, card.name);
    if(!(card.layout == "transform" || card.layout == "modal_dfc")) {
        document.getElementById("cardImageA" + i).src = card.image_uris.normal;
        document.getElementById("cardImageB" + i).src = "null"
    } else{
        document.getElementById("cardImageA" + i).src = card.card_faces[0].image_uris.normal;
        document.getElementById("cardImageB" + i).src = card.card_faces[1].image_uris.normal;
    }
}

function addCommander(i) {
    document.getElementById("decklist").textContent = document.getElementById("decklist").textContent + 1 + " " + sessionStorage.getItem('card' + i) + "\n";
    console.log('cardIdent' + i);
    sessionStorage.setItem("ident", sessionStorage.getItem('cardIdent' + i));

    clearStuff();
    nextCard();
}

function addSingle(i) {
    document.getElementById("decklist").textContent = document.getElementById("decklist").textContent + 1 + " " + sessionStorage.getItem('card' + i) + "\n";
    
    clearStuff();
    nextCard();
}

function clearStuff() {
    document.getElementById('imageRow').innerHTML = '';
    document.getElementById('options').innerHTML = '';
}