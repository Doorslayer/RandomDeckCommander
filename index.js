//Author: Kaylehb Edward T. States
//Date: 2024-03-29
window.onload = setDefaultValues;


function setDefaultValues() {
    const DEFAULT_COPTIONS = 5;
    const DEFAULT_NOPTIONS = 3;

    // Get the saved values from localStorage, or use the default values
    localStorage.setItem('COptions', localStorage.getItem('COptions') || DEFAULT_COPTIONS);
    localStorage.setItem('NOptions', localStorage.getItem('NOptions') || DEFAULT_NOPTIONS);

    // Update the text content of the HTML elements
    document.getElementById('COptionsVal').textContent = localStorage.getItem('COptions');
    document.getElementById('NOptionsVal').textContent = localStorage.getItem('NOptions');


}

function incrementCOptions(step) {
    localStorage.setItem('COptions', parseInt(localStorage.getItem('COptions')) + step);
    document.getElementById('COptionsVal').textContent = localStorage.getItem('COptions');
}

function incrementDoubles(step) {
    localStorage.setItem('NOptions', parseInt(localStorage.getItem('NOptions')) + step);
    document.getElementById('NOptionsVal').textContent = localStorage.getItem('NOptions');
}