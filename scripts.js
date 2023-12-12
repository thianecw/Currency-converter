const convertButton = document.querySelector(".convert-button")
const curreciesSelect = document.querySelector(".currecies-select")
const currencySelectTop = document.querySelector(".currency-select-top")


function convertCurrency() {
    const inputCurrency = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".value-To-Convert") //valor pra converter
    const valueConverted = document.querySelector(".value-converted") //valor já convertido

    const usdToday = 4.96 // Valor ficticio
    const eurToday = 5.34 // Valor ficticio
    const poundToday = 6.20 // Valor ficticio
    const btcToday = 215.205 // Valor ficticio 

//Valor primeira caixa - EM CONSTRUÇÃO //

if (currencySelectTop.value == "brl-to") {
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)
}

if (currencySelectTop.value == "usd-to") {
    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrency)
}

if (currencySelectTop.value == "eur-to") {
    valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrency)
}

if (currencySelectTop.value == "gbp-to") {
    valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrency)
}

if (currencySelectTop.value == "btc-to") {
    valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrency)
}

}

//Valor segunda caixa - JÁ PRONTO //
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

    valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)


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
        inputCurrency.placeholder = "Bitcoin Amount";
    }

    if (curreciesSelect.value == "brl") {
        currencyName.innerHTML = "Brazilian real"
        currencyImage.src = "./assets/real.png"
        inputCurrency.placeholder = "R$";
    }
//Valor segunda caixa
    convertCurrency()
}
//EM CONSTRUÇÃO - TROCAR A IMAGEM DAS MOEDAS E O NOME//

function changeCurrencyTop() {

}

curreciesSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertCurrency)