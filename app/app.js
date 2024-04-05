//Author: Kaylehb Edward T. States
//Date: 2024-04-05
window.onload = init();

function init() {
    document.addEventListener('DOMContentLoaded', function() {
        sessionStorage.setItem('COptions', localStorage.getItem('COptions'));
        sessionStorage.setItem('NOptions', localStorage.getItem('NOptions'));
        sessionStorage.setItem('Partner', 'F');
        sessionStorage.setItem('Friends', 'F');
        sessionStorage.setItem('Background', 'F');
        sessionStorage.setItem('Companion', 'F');
        sessionStorage.setItem('W', 'F');
        sessionStorage.setItem('U', 'F');
        sessionStorage.setItem('B', 'F');
        sessionStorage.setItem('R', 'F');
        sessionStorage.setItem('G', 'F');
        document.getElementById('partnerButton').style.backgroundColor = "#FF6347";
        document.getElementById('friendsButton').style.backgroundColor = "#FF6347";
        document.getElementById('backgroundButton').style.backgroundColor = "#FF6347";
        document.getElementById('companionButton').style.backgroundColor = "#FF6347";

        getCommander();
    });
}

function togglePartner() {
    if(sessionStorage.getItem('Partner') == 'F') {
        sessionStorage.setItem('Partner', 'T');
        document.getElementById('partnerButton').style.backgroundColor = "#32CD32";
    } else {
        sessionStorage.setItem('Partner', 'F');
        document.getElementById('partnerButton').style.backgroundColor = "#FF6347";
    }
}

function toggleFriends() {
    if(sessionStorage.getItem('Friends') == 'F') {
        sessionStorage.setItem('Friends', 'T');
        document.getElementById('friendsButton').style.backgroundColor = "#32CD32";
    } else {
        sessionStorage.setItem('Friends', 'F');
        document.getElementById('friendsButton').style.backgroundColor = "#FF6347";
    }
}

function toggleBackground() {
    if(sessionStorage.getItem('Background') == 'F') {
        sessionStorage.setItem('Background', 'T');
        document.getElementById('backgroundButton').style.backgroundColor = "#32CD32";
    } else {
        sessionStorage.setItem('Background', 'F');
        document.getElementById('backgroundButton').style.backgroundColor = "#FF6347";
    }
}

function toggleCompanion() {
    if(sessionStorage.getItem('Companion') == 'F') {
        sessionStorage.setItem('Companion', 'T');
        document.getElementById('companionButton').style.backgroundColor = "#32CD32";
    } else {
        sessionStorage.setItem('Companion', 'F');
        document.getElementById('companionButton').style.backgroundColor = "#FF6347";
    }
}

function toggleW() {
    if(sessionStorage.getItem('W') == 'F') {
        sessionStorage.setItem('W', 'T');
        document.getElementById('WButton').style.backgroundColor = "#e3db7f";
    } else {
        sessionStorage.setItem('W', 'F');
        document.getElementById('WButton').style.backgroundColor = "#8c8c8c";
    }
}

function toggleU() {
    if(sessionStorage.getItem('U') == 'F') {
        sessionStorage.setItem('U', 'T');
        document.getElementById('UButton').style.backgroundColor = "#1827b5";
    } else {
        sessionStorage.setItem('U', 'F');
        document.getElementById('UButton').style.backgroundColor = "#8c8c8c";
    }
}

function toggleB() {
    if(sessionStorage.getItem('B') == 'F') {
        sessionStorage.setItem('B', 'T');
        document.getElementById('BButton').style.backgroundColor = "#3a0657";
    } else {
        sessionStorage.setItem('B', 'F');
        document.getElementById('BButton').style.backgroundColor = "#8c8c8c";
    }
}

function toggleR() {
    if(sessionStorage.getItem('R') == 'F') {
        sessionStorage.setItem('R', 'T');
        document.getElementById('RButton').style.backgroundColor = "#940a0a";
    } else {
        sessionStorage.setItem('R', 'F');
        document.getElementById('RButton').style.backgroundColor = "#8c8c8c";
    }
}

function toggleG() {
    if(sessionStorage.getItem('G') == 'F') {
        sessionStorage.setItem('G', 'T');
        document.getElementById('GButton').style.backgroundColor = "#178520";
    } else {
        sessionStorage.setItem('G', 'F');
        document.getElementById('GButton').style.backgroundColor = "#8c8c8c";
    }
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
                console.log(cIdent);
                if (cIdent.length == 0){sessionStorage.setItem('cardIdent' + i, 'C')}
                else  {
                    sessionStorage.setItem('cardIdent' + i, "")
                    if (cIdent.includes('W')) {sessionStorage.setItem('cardIdent' + i, sessionStorage.getItem('cardIdent' + i) + 'W')}
                    if (cIdent.includes('U')) {sessionStorage.setItem('cardIdent' + i, sessionStorage.getItem('cardIdent' + i) + 'U')}
                    if (cIdent.includes('B')) {sessionStorage.setItem('cardIdent' + i, sessionStorage.getItem('cardIdent' + i) + 'B')}
                    if (cIdent.includes('R')) {sessionStorage.setItem('cardIdent' + i, sessionStorage.getItem('cardIdent' + i) + 'R')}
                    if (cIdent.includes('G')) {sessionStorage.setItem('cardIdent' + i, sessionStorage.getItem('cardIdent' + i) + 'G')}
                }
                console.log(sessionStorage.getItem('cardIdent' + i))
                displayCard(card, i)
            }
        };
        xhttp.open("GET", "https://api.scryfall.com/cards/random?q=in%3Apaper+not%3Afunny+is%3Acommander+-t:background", true);
        xhttp.send();
    }
}

function getPartner() {
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
        btn.onclick = function() { addPartner(i); };
        document.getElementById("options").appendChild(btn);
    }
    //get random commanders
    for (let i = 0; i < parseInt(sessionStorage.getItem("NOptions")); i++) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let card = JSON.parse(xhttp.responseText);
                let cIdent = card.color_identity;
                if (cIdent.length == 0){sessionStorage.setItem('cardIdent' + i, 'c')}
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
        xhttp.open("GET", "https://api.scryfall.com/cards/random?q=in%3Apaper+not%3Afunny+is%3Acommander+o:partner+-o:\"partner with\"", true);
        xhttp.send();
    }
}

function getFriend() {
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
        btn.onclick = function() { addPartner(i); };
        document.getElementById("options").appendChild(btn);
    }
    //get random commanders
    for (let i = 0; i < parseInt(sessionStorage.getItem("NOptions")); i++) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let card = JSON.parse(xhttp.responseText);
                let cIdent = card.color_identity;
                if (cIdent.length == 0){sessionStorage.setItem('cardIdent' + i, 'c')}
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
        xhttp.open("GET", "https://api.scryfall.com/cards/random?q=in%3Apaper+not%3Afunny+is%3Acommander+o:\"friends forever\"", true);
        xhttp.send();
    }
}

function getBackground() {
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
        btn.onclick = function() { addPartner(i); };
        document.getElementById("options").appendChild(btn);
    }
    //get random commanders
    for (let i = 0; i < parseInt(sessionStorage.getItem("NOptions")); i++) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let card = JSON.parse(xhttp.responseText);
                let cIdent = card.color_identity;
                if (cIdent.length == 0){sessionStorage.setItem('cardIdent' + i, 'c')}
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
        xhttp.open("GET", "https://api.scryfall.com/cards/random?q=in%3Apaper+not%3Afunny+is%3Acommander+t:background", true);
        xhttp.send();
    }
}

function getDoctor() {
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
        btn.onclick = function() { addPartner(i); };
        document.getElementById("options").appendChild(btn);
    }
    //get random commanders
    for (let i = 0; i < parseInt(sessionStorage.getItem("NOptions")); i++) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let card = JSON.parse(xhttp.responseText);
                let cIdent = card.color_identity;
                if (cIdent.length == 0){sessionStorage.setItem('cardIdent' + i, 'c')}
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
        xhttp.open("GET", "https://api.scryfall.com/cards/random?q=in%3Apaper+not%3Afunny+is%3Acommander+t:doctor", true);
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
        xhttp.open("GET", "https://api.scryfall.com/cards/random?q=in%3Apaper+not%3Afunny+-t:conspiracy+-t:attraction+-t:stickers+-o:ante+-t:basic+id<=" + sessionStorage.getItem("ident"), true);
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
    if (sessionStorage.getItem('W') == 'T') {sessionStorage.setItem('ident', sessionStorage.getItem('ident') + 'W')}
    if (sessionStorage.getItem('U') == 'T') {sessionStorage.setItem('ident', sessionStorage.getItem('ident') + 'U')}
    if (sessionStorage.getItem('B') == 'T') {sessionStorage.setItem('ident', sessionStorage.getItem('ident') + 'B')}
    if (sessionStorage.getItem('R') == 'T') {sessionStorage.setItem('ident', sessionStorage.getItem('ident') + 'R')}
    if (sessionStorage.getItem('G') == 'T') {sessionStorage.setItem('ident', sessionStorage.getItem('ident') + 'G')}

    clearStuff();
    if (sessionStorage.getItem('Partner') == 'T') {
        getPartner();
    } else if (sessionStorage.getItem('Friends') == 'T') {
        getFriend();
    } else if (sessionStorage.getItem('Background') == 'T') {
        getBackground();
    } else if (sessionStorage.getItem('Companion') == 'T') {
        getDoctor();
    }
    else {
        nextCard();
    }
}

function addPartner(i) {
    document.getElementById("decklist").textContent = document.getElementById("decklist").textContent + 1 + " " + sessionStorage.getItem('card' + i) + "\n";
    console.log('cardIdent' + i);
    if(sessionStorage.getItem('ident') == 'c') {
        sessionStorage.setItem("ident", sessionStorage.getItem('cardIdent' + i));
    } else if (sessionStorage.getItem('cardIdent' + i) != 'c') {
        sessionStorage.setItem("ident", sessionStorage.getItem('ident') + sessionStorage.getItem('cardIdent' + i));
    }

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