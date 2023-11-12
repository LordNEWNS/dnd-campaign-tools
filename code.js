const Calc = document.getElementById(`Calc`);
const outPut = document.getElementById(`Dc`);
let HealthPercentagModifer = 3;
let AilmentModifier = 0;
let StatModifier = 3;
let ClassBonus = 0;
let DC = 0;

document.getElementById('MaxHealth').addEventListener('input', updateDC);
document.getElementById('CurrentHealth').addEventListener('input', updateDC);
document.getElementById('AbilityModifier').addEventListener('input', updateDC);
document.getElementById('Ailments').addEventListener('input', updateDC);
document.getElementById('Mythic').addEventListener('input', updateDC);
document.getElementById('Legendary').addEventListener('input', updateDC);

function updateDC () {
    GetValues ();
    if (isNaN(HealthPercentagModifer) || isNaN(AilmentModifier) || isNaN(StatModifier)) {
        outPut.textContent = `Waiting for numbers`
        return;
    };
    CalculateDc ();
    outPut.textContent = `DC = ` + DC;

};

function GetValues () {
    const InputMax = parseInt(document.getElementById(`MaxHealth`).value);
    const InputCurrent = parseInt(document.getElementById(`CurrentHealth`).value);
    const NumberOfAilments = parseInt(document.getElementById(`Ailments`).value);
    const AbilityScoreModifier = parseInt(document.getElementById(`AbilityModifier`).value);
    IsMythic = document.getElementById(`Mythic`).checked;
    IsLegendary = document.getElementById(`Legendary`).checked;
    HealthPercentagModifer = Math.round((InputCurrent / InputMax) * 10);
    AilmentModifier = NumberOfAilments * 3;
    StatModifier = AbilityScoreModifier;
    if (IsMythic && IsLegendary) {
        ClassBonus = 15;
    } else if (IsLegendary) {
        ClassBonus = 5;
    } else if (IsMythic) {
        ClassBonus = 10;
    } else {
        ClassBonus = 0;
    };
};

function CalculateDc () {
    DC = 10 + HealthPercentagModifer + StatModifier - AilmentModifier + ClassBonus;
};