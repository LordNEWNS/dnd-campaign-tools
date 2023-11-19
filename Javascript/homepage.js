const outPut = document.getElementById('askingPrice');
let askingPrice = 0;

const rarityRanges = {
  common: { min: 50, max: 100 },
  uncommon: { min: 101, max: 500 },
  rare: { min: 501, max: 5000 },
  veryrare: { min: 5001, max: 50000 },
  legendary: { min: 50001, max: 300000 }
};

document.getElementById('shopkeep').addEventListener('click', function(event) {
    if (event.target.matches('#common, #uncommon, #rare, #veryrare, #legendary')) {
      calculateAskingPrice(event);
    }
});

// Function to calculate and display asking price
function calculateAskingPrice(event) {
  const rarity = event.target.id;
  const { min, max } = rarityRanges[rarity];
  askingPrice = Math.floor(Math.random() * (max - min + 1)) + min;
  outPut.textContent = `The asking price is ${askingPrice}`;
}