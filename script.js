const amount = document.getElementById("amount")
const description = document.getElementById("description")
const email = document.getElementById("email")
const generateButton = document.getElementById("button")
let result = document.getElementById("result")

function generate() {
    generateButton.addEventListener("click", function () {
        let dashedTxt = description.value.replace(/ /g, "-")
        if(description.value += ""){
            description.value = dashedTxt
        }
        
        result.textContent = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${email.value}&currency_code=EUR&amount=${amount.value}&item_name=${description.value}`
        result.style.color = "blue"
        result.style.cursor = "pointer"
        result.href = `${result.textContent}`
        result.style.display = "block"
        
        
        if ( !email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) || amount.value == "" || description.value == "" || email.value == "") {
            result.textContent = "Please complete all input fields!"
            result.style.color = "red"
            result.style.textDecoration = "none"
            result.removeAttribute("href")
            result.style.cursor = "default"
            result.style.display = "block"
        }
    })
}
generate()