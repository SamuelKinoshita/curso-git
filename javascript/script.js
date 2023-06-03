const botoes = document.getElementByTagName("button")
const cores = ["#D94E33","#2C5697"]

for (let i = 0 ; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
        document.body.style.background = cores[i]
    })
}