
    /*{
        nome: "gabinete",
        valor: 900,
        id: 1,
        url :"https://a-static.mlcdn.com.br/280x210/smartphone-samsung-galaxy-s22-128gb-rose-5g-8gb-ram-tela-61-cam-tripla-selfie-10mp/magazineluiza/234437800/0bf8c92e806539910a299b9ce53ce8f4.jpg"
    },
    {
        nome: "mouse",
        valor: 100,
        id: 2,
        url : "https://a-static.mlcdn.com.br/280x210/smartphone-samsung-galaxy-s22-128gb-rose-5g-8gb-ram-tela-61-cam-tripla-selfie-10mp/magazineluiza/234437800/0bf8c92e806539910a299b9ce53ce8f4.jpg",
    },
    {
        nome: "tela",
        valor: 700,
        id: 3,
        url : "https://a-static.mlcdn.com.br/280x210/smartphone-samsung-galaxy-s22-128gb-rose-5g-8gb-ram-tela-61-cam-tripla-selfie-10mp/magazineluiza/234437800/0bf8c92e806539910a299b9ce53ce8f4.jpg",
    }*/
let produtos = []

function carrinho(n,l){
let somatotal = 0
let saldo = window.document.getElementById('saldo')
let lista = document.getElementById('div2cart')
let linhanova = window.document.createElement('p')

produtos.push(n)
lista.appendChild(linhanova)
linhanova.textContent = `${l} valor: R$${n},00`

for(let i = 0; i < produtos.length; i++){
    somatotal += produtos[i]
}
saldo.textContent = somatotal
}

