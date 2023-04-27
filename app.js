window.onload = nextCard();

function nextCard() {
    //get random card
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let card = JSON.parse(xhttp.responseText);
        localStorage.setItem('card', card);
        document.getElementById("cardImage").src = card.image_uris.normal;
      }
    };
    xhttp.open("GET", "https://api.scryfall.com/cards/random", true);
    xhttp.send();

    
}