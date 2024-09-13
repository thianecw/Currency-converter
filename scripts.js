const convertButton = document.querySelector(".convert-button");
const currenciesSelect = document.querySelector(".currencies-select");
const currencySelectTop = document.querySelector(".currency-select-top");
const alertMessage = document.getElementById("alert-message");
const inputCurrency = document.querySelector(".input-currency");


convertButton.addEventListener("click", () => {
    const inputCurrency = parseFloat(document.querySelector(".input-currency").value);

    if (isNaN(inputCurrency) || inputCurrency <= 0) {
        alertMessage.style.display = 'block'; // Mostrar o aviso
                valueConverted.innerHTML = '';
        return;  
        } else {
         alertMessage.style.display = 'none'; // Esconder o aviso
        }
});

const convertCurrency = async () => {
    const inputCurrency = parseFloat(document.querySelector(".input-currency").value);
    const valueConverted = document.querySelector(".value-converted");
    

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,BRL-USD,EUR-BRL,BRL-EUR,EUR-USD,USD-EUR,BRL-GBP,GBP-BRL,USD-GBP,GBP-USD,EUR-GBP,GBP-EUR")
        .then(response => response.json());

    const usdToday = parseFloat(data.USDBRL.high);
    const eurToday = parseFloat(data.EURBRL.high);
    const gbpToday = parseFloat(data.GBPBRL.high);
    const usdtoeur = parseFloat(data.USDEUR.high);
    const usdtogbp = parseFloat(data.USDGBP.high);
    const eurtousd = parseFloat(data.EURUSD.high);
    const eurtogbp = parseFloat(data.EURGBP.high);
    const gbptousd = parseFloat(data.GBPUSD.high);
    const gbptoeur = parseFloat(data.GBPEUR.high);

    //BRL TO USD, EUR, GBP //

    if (currencySelectTop.value == "brl-to" && currenciesSelect.value == "usd") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency / usdToday);
    } else if (currencySelectTop.value == "brl-to" && currenciesSelect.value == "eur") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency / eurToday);
    } else if (currencySelectTop.value == "brl-to" && currenciesSelect.value == "gbp") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrency / gbpToday);

        //USD TO BRL, EUR, GBP //

    } else if (currencySelectTop.value == "usd-to" && currenciesSelect.value == "brl") {
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency * usdToday);

    } else if (currencySelectTop.value == "usd-to" && currenciesSelect.value == "gbp") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrency * usdtogbp);

    } else if (currencySelectTop.value == "usd-to" && currenciesSelect.value == "eur") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency * usdtoeur);

        //EUR TO BRL, USD, GBP //

    } else if (currencySelectTop.value == "eur-to" && currenciesSelect.value == "brl") {
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency * eurToday);

    } else if (currencySelectTop.value == "eur-to" && currenciesSelect.value == "usd") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency * eurtousd);

    } else if (currencySelectTop.value == "eur-to" && currenciesSelect.value == "gbp") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrency * eurtogbp);

           //GBP TO BRL, USD, EUR //

    } else if (currencySelectTop.value == "gbp-to" && currenciesSelect.value == "brl") {
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency * gbpToday);

    } else if (currencySelectTop.value == "gbp-to" && currenciesSelect.value == "usd") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency * gbptousd);

    } else if (currencySelectTop.value == "gbp-to" && currenciesSelect.value == "eur") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency * gbptoeur);

        //MOEDAS ENTRE SI MESMO //

    } else if (currencySelectTop.value == "brl-to" && currenciesSelect.value == "brl") {
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency);
    } else if (currencySelectTop.value == "usd-to" && currenciesSelect.value == "usd") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency);
    } else if (currencySelectTop.value == "eur-to" && currenciesSelect.value == "eur") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency);
    } else if (currencySelectTop.value == "gbp-to" && currenciesSelect.value == "gbp") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrency);
    }

    formatCurrency(inputCurrency);
}

const formatCurrency = (inputCurrency) => {
    const currencySelectTop = document.querySelector(".currency-select-top");
    const valueToConvert = document.querySelector(".value-To-Convert");

    if (currencySelectTop.value == "usd-to") {
        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency);
    } else if (currencySelectTop.value == "brl-to") {
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency);
    } else if (currencySelectTop.value == "eur-to") {
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency);
    } else if (currencySelectTop.value == "gbp-to") {
        valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrency);
        }
}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-image");
    const inputCurrency = document.querySelector(".input-currency");
    const currencyNameTop = document.querySelector(".currency-Top");
    const currencyImageTop = document.querySelector(".currency-image-top");
    const valueToConvert = document.querySelector(".value-To-Convert");
    const valueConverted = document.querySelector(".value-converted")


    if (currencySelectTop.value == "usd-to") {
        currencyNameTop.innerHTML = "American dollar";
        currencyImageTop.src = "./assets/usd.png";
        valueToConvert.innerHTML = "US$ 0.00";

    } else if (currencySelectTop.value == "brl-to") {
        currencyNameTop.innerHTML = "Brazilian Real";
        currencyImageTop.src = "./assets/real.png";
        valueToConvert.innerHTML = "R$ 0,00";

    } else if (currencySelectTop.value == "eur-to") {
        currencyNameTop.innerHTML = "Euro";
        currencyImageTop.src = "./assets/eur.png";
        valueToConvert.innerHTML = "€ 0.00";

    } else if (currencySelectTop.value == "gbp-to") {
        currencyNameTop.innerHTML = "Pound Sterling";
        currencyImageTop.src = "./assets/gbp.png";
        valueToConvert.innerHTML = "£ 0.00";

    } else if (currencySelectTop.value == "btc-to") {
        currencyNameTop.innerHTML = "Bitcoin";
        currencyImageTop.src = "./assets/btc.png";
        valueToConvert.innerHTML = "₿ 0.00";
    }

    if (currenciesSelect.value == "usd") {
        currencyName.innerHTML = "American dollar";
        currencyImage.src = "./assets/usd.png";
        inputCurrency.placeholder = "$";
        valueConverted.innerHTML = "US$ 0.00";

    } else if (currenciesSelect.value == "brl") {
        currencyName.innerHTML = "Brazilian real";
        currencyImage.src = "./assets/real.png";
        inputCurrency.placeholder = "R$";
        valueConverted.innerHTML = "R$ 0,00";

    } else if (currenciesSelect.value == "eur") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/eur.png";
        inputCurrency.placeholder = "€";
        valueConverted.innerHTML = "€ 0.00";

    } else if (currenciesSelect.value == "gbp") {
        currencyName.innerHTML = "Pound Sterling";
        currencyImage.src = "./assets/gbp.png";
        inputCurrency.placeholder = "£";
        valueConverted.innerHTML = "£ 0.00";

    } else if (currenciesSelect.value == "btc") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/btc.png";
        inputCurrency.placeholder = "₿";
        valueConverted.innerHTML = "₿ 0.00";
    }

    convertCurrency()
}


// convertButton.addEventListener("click", () => {
//     const inputCurrency = parseFloat(document.querySelector(".input-currency").value);

//     if (isNaN(inputCurrency) || inputCurrency <= 0) {
//         alertMessage.style.display = 'block';
//         return;
//     } else {
//         alertMessage.style.display = 'none';
//         convertCurrency(inputCurrency);
//     }
// });

currencySelectTop.addEventListener("change", changeCurrency);
currenciesSelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);


inputCurrency.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        convertCurrency();
    }
})