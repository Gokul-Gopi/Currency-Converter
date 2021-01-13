let currencyA = document.querySelector('.currency-A-select');
let currencyB = document.querySelector('.currency-B-select');
let inputFieldA = document.querySelector('.currency-A');
let inputFieldB = document.querySelector('.currency-B');
let perRate = document.querySelector('.rate');
let swap = document.querySelector('.swap-btn');

function checkRates() {

    let countryA = currencyA.value;
    let countryB = currencyB.value;
    fetch(`https://v6.exchangerate-api.com/v6/fc2471d06553e064247c1f7e/latest/${countryA}`)
        .then(response => response.json())
        .then((data) => {
            let rate = data.conversion_rates[countryB];
            let actualRate = rate * inputFieldA.value;
            inputFieldB.value = actualRate.toFixed(2)
            perRate.innerHTML = `1 ${countryA} = ${rate} ${countryB}`
        });

    perRate.style.visibility = 'visible';
}

function swapCurrencies() {
    let temp = currencyA.value;
    currencyA.value = currencyB.value;
    currencyB.value = temp;
    checkRates();
    perRate.style.visibility = 'visible';
}

currencyA.addEventListener('change', checkRates);
currencyB.addEventListener('change', checkRates);
inputFieldA.addEventListener('input', checkRates);
inputFieldB.addEventListener('input', checkRates);

swap.addEventListener('click', swapCurrencies)