/*
Exercício 1
Geralmente, quando você compra algo, é perguntado se o número do seu cartão de crédito, telefone ou
resposta para sua pergunta secreta ainda está correto. No entanto, como alguém pode olhar por cima do
seu ombro, você não quer que isso apareça em sua tela. Em vez disso, nós o mascaramos. Sua tarefa é
escrever uma função maskify, que altera todos, exceto os últimos quatro caracteres, para "#".
Exemplos:
"4556364607935616" --> "############5616"
"64607935616" --> "######5616"
"1" --> "1"
"" ---> ""
"Skippy" --> "##ippy"
"Nanananananananananana Batman!" --> "##########################man!"
Código:

function maskify(string) {
your code here...
}
module.exports = maskify;*/

    let myCard = '5550555055505550'
    let myEmail = 'myemail@hotmail.com'
    let myCPF = '12345678922'
    let myName = 'ABcd 1234 $@!% 1234'


    function maskify(n){
        if(n.length > 4){
            const notMask = n.substring(n.length -4 , n.length)
            const toMask = n.substring( 0 , n.length -4 )
            const mask1 = toMask.replace(/[\n\r\s\t]+/gi, '')
            const maskify = mask1.replace(/[\w+$@!%#¨&]/gi, '*') + notMask
            return maskify
        }else{
            return n
        }
    }

    namemask = maskify(myCPF)
    console.log(namemask)
