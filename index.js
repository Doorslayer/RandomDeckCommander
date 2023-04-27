//Author: Kaylehb Edward T. States
//Date: 2023-04-27
window.onload = setDefaultValues;


function setDefaultValues() {
    const DEFAULT_SKIPS = 5;
    const DEFAULT_DOUBLES = 4;
    const DEFAULT_TRIPLES = 3;
    const DEFAULT_PLAYSETS = 2;

    // Get the saved values from localStorage, or use the default values
    localStorage.setItem('skips', localStorage.getItem('skips') || DEFAULT_SKIPS);
    localStorage.setItem('doubles', localStorage.getItem('doubles') || DEFAULT_DOUBLES);
    localStorage.setItem('triples', localStorage.getItem('triples') || DEFAULT_TRIPLES);
    localStorage.setItem('playsets', localStorage.getItem('playsets') || DEFAULT_PLAYSETS);

    // Update the text content of the HTML elements
    document.getElementById('SkipsVal').textContent = localStorage.getItem('skips');
    document.getElementById('DoublesVal').textContent = localStorage.getItem('doubles');
    document.getElementById('TriplesVal').textContent = localStorage.getItem('triples');
    document.getElementById('PlaysetsVal').textContent = localStorage.getItem('playsets');

}

function incrementSkips(step) {
    localStorage.setItem('skips', parseInt(localStorage.getItem('skips')) + step);
    document.getElementById('SkipsVal').textContent = localStorage.getItem('skips');
}

function incrementDoubles(step) {
    localStorage.setItem('doubles', parseInt(localStorage.getItem('doubles')) + step);
    document.getElementById('DoublesVal').textContent = localStorage.getItem('doubles');
}

function incrementTriples(step) {
    localStorage.setItem('triples', parseInt(localStorage.getItem('triples')) + step);
    document.getElementById('TriplesVal').textContent = localStorage.getItem('triples');
}

function incrementPlaysets(step) {
    localStorage.setItem('playsets', parseInt(localStorage.getItem('playsets')) + step);
    document.getElementById('PlaysetsVal').textContent = localStorage.getItem('playsets');
}