const outPut = document.getElementById(`askingPrice`);
let askingPrice = 0;


document.getElementById('common').addEventListener('click', calculateAskingPriceCommon);
document.getElementById('uncommon').addEventListener('click', calculateAskingPriceUncommon);
document.getElementById('rare').addEventListener('click', calculateAskingPriceRare);
document.getElementById('veryrare').addEventListener('click', calculateAskingPriceVeryRare);
document.getElementById('legendary').addEventListener('click', calculateAskingPriceLegendary);


// random number between 50 and 100
function calculateAskingPriceCommon() {
    askingPrice = Math.floor(Math.random() * 51) + 50;
    outputAskingPrice();  
};
// randome number between 101 and 500
function calculateAskingPriceUncommon() {
    askingPrice = Math.floor(Math.random() * 400) + 101;
    outputAskingPrice();  
};
// random number between 501 and 5000
function calculateAskingPriceRare() {
    askingPrice = Math.floor(Math.random() * 4500) + 501;
    outputAskingPrice();  
};
// randome between 5001 and 50,000
function calculateAskingPriceVeryRare() {
    askingPrice = Math.floor(Math.random() * 45000) + 5001;
    outputAskingPrice();  
};
// random between 50,001 and 300,000
function calculateAskingPriceLegendary() {
    askingPrice = Math.floor(Math.random() * 250000) + 50001;
    outputAskingPrice(); 
};
// deliver asking price 
function outputAskingPrice() {
    outPut.textContent = `The asking price is ${askingPrice}`; 
}
