let input = document.getElementById('input')
let cButton = document.getElementById('c')
let divideButton = document.getElementById('/')
let multiButton = document.getElementById('*')
let minusButton = document.getElementById('-')
let plusButton = document.getElementById('+')
let resultButton = document.getElementById('=')
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let n4 = document.getElementById('n4')
let n5 = document.getElementById('n5')
let n6 = document.getElementById('n6')
let n7 = document.getElementById('n7')
let n8 = document.getElementById('n8')
let n9 = document.getElementById('n9')
let n0 = document.getElementById('n0')


let historic = []
let myNumber1 = 0
let myNumber2 = 0
let myResult = myNumber1 + myNumber2

function addNumber(n){
    n = n.toString()
    input.value += n
    return myNumber = input.value
}

function clearInput(){
    input.value = ''
}

function divide(){
    console.log(myNumber)
}
