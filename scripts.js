const convertButton = document.querySelector(".convert-button")
const curreciesSelect = document.querySelector(".currecies-select")

function convertCurrency() {
    const inputCurrency = document.querySelector(".input-currency").value
    const valueToBeConverted = document.querySelector(".value-To-Be-Converted")
    const valueConverted = document.querySelector(".value-converted")

    const usdToday = 4.96
    const eurToday = 5.34
    const poundToday = 6.20
    const btcToday = 215.205

    if (curreciesSelect.value == "usd") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / usdToday)
    }

    if (curreciesSelect.value == "eur") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / eurToday)
    }

    if (curreciesSelect.value == "pound") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / poundToday)
    }

    if (curreciesSelect.value == "btc") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency / btcToday)
    }

    valueToBeConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")
    const inputCurrency = document.querySelector(".input-currency");

    if (curreciesSelect.value == "usd") {
        currencyName.innerHTML = "American dollar"
        currencyImage.src = "./assets/usd.png"
        inputCurrency.placeholder = "$";
    }

    if (curreciesSelect.value == "eur") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/eur.png"
        inputCurrency.placeholder = "€";
    }

    if (curreciesSelect.value == "pound") {
        currencyName.innerHTML = "Pound sterling"
        currencyImage.src = "./assets/pound.png"
        inputCurrency.placeholder = "£";
    }

    if (curreciesSelect.value == "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/btc.png"
        inputCurrency.placeholder = "₿";
    }

    if (curreciesSelect.value == "brl") {
        currencyName.innerHTML = "Brazilian real"
        currencyImage.src = "./assets/real.png"
        inputCurrency.placeholder = "R$";
    }

    convertCurrency()
}

curreciesSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertCurrency)

// DEIXAR O SIMBOLO APARECENDO ENQUANTO DIGITA
// E DEIXAR CASAS DECIMAIS NO INPUT