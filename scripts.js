const convertButton = document.querySelector(".convert-button")
const curreciesSelect = document.querySelector(".currecies-select")
const currencySelectTop = document.querySelector(".currency-select-top")


function convertCurrency() {
    const inputCurrency = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".value-To-Convert") //valor pra converter
    const valueConverted = document.querySelector(".value-converted") //valor já convertido

    const usdToday = 4.96 // Valor ficticio
    const eurToday = 5.34 // Valor ficticio

    //SELETOR TOP - EM CONSTRUÇÃO //

    //BRL TO USD//
    if (currencySelectTop.value == "brl-to" && curreciesSelect.value == "usd") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / usdToday)
    }

    //BRL TO EUR//
    if (currencySelectTop.value == "brl-to" && curreciesSelect.value == "eur") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / eurToday)
    }

    //USD TO BRL//
    if (currencySelectTop.value == "usd-to" && curreciesSelect.value == "brl") {
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency * usdToday)
    }

    //USD TO EUR//
    if (currencySelectTop.value == "usd-to" && curreciesSelect.value == "eur") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / eurToday)
    }

    //EUR TO BRL//
    if (currencySelectTop.value == "eur-to" && curreciesSelect.value == "brl") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency * eurToday)
    }

    //EUR TO USD//
    if (currencySelectTop.value == "eur-to" && curreciesSelect.value == "usd") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency * usdToday)
    }

    //SEGUNDO SELECT //

    function formatCurrency() {

//MUDAR O FORMATO DOS NÚMEROS CONVERTIDOS//
        if (currencySelectTop.value == "usd-to") {
            valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputCurrency)

     } else if (curreciesSelect.value == "brl-to") { 
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(inputCurrency)

         } else if (curreciesSelect.value == "eur-to") {
                valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                }).format(inputCurrency)
            }
}
formatCurrency ()
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name") //SEGUNDO SELECT//
    const currencyImage = document.querySelector(".currency-image") //SEGUNDO SELECT//
    const inputCurrency = document.querySelector(".input-currency") //SÍMBOLO MOEDA NO PLACE HOLDER//
    const currencyNameTop = document.querySelector(".currency-Top") //PRIMEIRO SELECT//
    const currencyImageTop = document.querySelector(".currency-image-top") //PRIMEIRO SELECT//

    //MUDANÇA DE IMAGEM, NOME, PLACE HOLDER SIMBOLO //

    //USD//
    if (currencySelectTop.value == "usd-to") {
        currencyNameTop.innerHTML = "American dollar"
        currencyImageTop.src = "./assets/usd.png"
        inputCurrency.placeholder = "$";
    }

    if (curreciesSelect.value == "usd") {
        currencyName.innerHTML = "American dollar"
        currencyImage.src = "./assets/usd.png"
        inputCurrency.placeholder = "$";
    }

    //BRL//
    if (currencySelectTop.value == "brl-to") {
        currencyNameTop.innerHTML = "Brazilian Real"
        currencyImageTop.src = "./assets/real.png"
        inputCurrency.placeholder = "R$";//
    }

    if (curreciesSelect.value == "brl") {
        currencyName.innerHTML = "Brazilian real"
        currencyImage.src = "./assets/real.png"
        inputCurrency.placeholder = "R$";
    }

//EUR//
    if (currencySelectTop.value == "eur-to") {
        currencyNameTop.innerHTML = "Euro"
        currencyImageTop.src = "./assets/eur.png"
        inputCurrency.placeholder = "€";
    }

        if (curreciesSelect.value == "eur") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/eur.png"
        inputCurrency.placeholder = "€";
    }

    }

currencySelectTop.addEventListener("change", changeCurrency)
curreciesSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertCurrency)