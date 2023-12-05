const convertButton = document.querySelector(".convert-button")
const curreciesSelect = document.querySelector(".currecies-select")

function convertCurrency() {
    const inputCurrency = document.querySelector(".input-currency")
    const valueToBeConverted = document.querySelector(".value-To-Be-Converted")
    const valueConverted = document.querySelector(".value-converted")

    const usdToday = 4.96
    const eurToday = 5.34

    if(curreciesSelect.value == "usd"){
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / usdToday)
    }

    if(curreciesSelect.value == "eur"){
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / eurToday)

}

valueToBeConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrency)

convertButton.addEventListener("click", convertCurrency) 

}