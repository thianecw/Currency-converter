const convertButton = document.querySelector(".convert-button");
const currenciesSelect = document.querySelector(".currencies-select");
const currencySelectTop = document.querySelector(".currency-select-top");
const alertMessage = document.getElementById("alert-message");
const inputCurrency = document.querySelector(".input-currency");


const convertCurrency = async () => {
    const inputCurrency = parseFloat(document.querySelector(".input-currency").value);
    const valueToConvert = document.querySelector(".value-To-Convert");
    const valueConverted = document.querySelector(".value-converted");

    if (isNaN(inputCurrency) || inputCurrency <= 0) {
        alertMessage.style.display = 'block'; // Mostrar o aviso
        return;
    } else {
        alertMessage.style.display = 'none'; // Esconder o aviso
    }

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,BRL-USD,EUR-BRL,BRL-EUR,EUR-USD,USD-EUR")
        .then(response => response.json());

    const usdToday = parseFloat(data.USDBRL.high);
    const eurToday = parseFloat(data.EURBRL.high);
    const usdtoeur = parseFloat(data.USDEUR.high);
    const eurtousd = parseFloat(data.EURUSD.high);

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
    } else if (currencySelectTop.value == "usd-to" && currenciesSelect.value == "brl") {
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency * usdToday);
    } else if (currencySelectTop.value == "usd-to" && currenciesSelect.value == "eur") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency / usdtoeur);
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
    } else if (currencySelectTop.value == "btc-to") {
        const btcValue = Number(inputCurrency).toFixed(8); // Bitcoin typically uses 8 decimal places
        valueConverted.innerHTML = `₿ ${btcValue}`;
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
    } else if (currencySelectTop.value == "btc-to") {
        const btcValue = Number(inputCurrency).toFixed(8); // Bitcoin typically uses 8 decimal places
        valueToConvert.innerHTML = `₿ ${btcValue}`;
    }
}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-image");
    const inputCurrency = document.querySelector(".input-currency");
    const currencyNameTop = document.querySelector(".currency-Top");
    const currencyImageTop = document.querySelector(".currency-image-top");

    if (currencySelectTop.value == "usd-to") {
        currencyNameTop.innerHTML = "American dollar";
        currencyImageTop.src = "./assets/usd.png";
    } else if (currencySelectTop.value == "brl-to") {
        currencyNameTop.innerHTML = "Brazilian Real";
        currencyImageTop.src = "./assets/real.png";
    } else if (currencySelectTop.value == "eur-to") {
        currencyNameTop.innerHTML = "Euro";
        currencyImageTop.src = "./assets/eur.png";
    } else if (currencySelectTop.value == "btc-to") {
        currencyNameTop.innerHTML = "Bitcoin";
        currencyImageTop.src = "./assets/btc.png";
    } else if (currencySelectTop.value == "gbp-to") {
        currencyNameTop.innerHTML = "Pound Sterling";
        currencyImageTop.src = "./assets/gbp.png";
    }

    if (currenciesSelect.value == "usd") {
        currencyName.innerHTML = "American dollar";
        currencyImage.src = "./assets/usd.png";
        inputCurrency.placeholder = "$";
    } else if (currenciesSelect.value == "brl") {
        currencyName.innerHTML = "Brazilian real";
        currencyImage.src = "./assets/real.png";
        inputCurrency.placeholder = "R$";
    } else if (currenciesSelect.value == "eur") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/eur.png";
        inputCurrency.placeholder = "€";
    } else if (currenciesSelect.value == "btc") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/btc.png";
        inputCurrency.placeholder = "₿";
    } else if (currenciesSelect.value == "gbp") {
        currencyName.innerHTML = "Pound Sterling";
        currencyImage.src = "./assets/gbp.png";
        inputCurrency.placeholder = "£";
    }

}

currencySelectTop.addEventListener("change", changeCurrency);
currenciesSelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);


inputCurrency.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        convertCurrency();
    }
});