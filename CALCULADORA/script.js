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
let calc = 0
let myNumber1 = 0
let myNumber2 = 0

function addNumber(n){
    n = n.toString()
    input.value += n
    return myNumber = input.value
}

function clearInput(){
    calc = 0
    myNumber1 = 0
    myNumber2 = 0
    input.value = ''
    divideButton.style.opacity = 1
    multiButton.style.opacity = 1
    plusButton.style.opacity = 1
    minusButton.style.opacity = 1
    resultButton.style.backgroundColor = 'white'
}

function result(){
    myNumber2 = Number(input.value)
    divideButton.style.opacity = 1
    multiButton.style.opacity = 1
    plusButton.style.opacity = 1
    minusButton.style.opacity = 1
    resultButton.style.backgroundColor = 'white'    
    if(calc === 0){
        input.value = myNumber1 + myNumber2
    }else if(calc === 1){
        input.value = myNumber1 / myNumber2
    }else if(calc === 2){
        input.value = myNumber1 * myNumber2
    }else if(calc === 3){
        input.value = myNumber1 - myNumber2
    }
}

function plus(){
    myNumber1 = Number(input.value)
    calc = 0
    input.value = ''
    divideButton.style.opacity = 0.2
    multiButton.style.opacity = 0.2
    plusButton.style.opacity = 0.2
    minusButton.style.opacity = 0.2
    resultButton.style.backgroundColor = 'yellow'
}

function divide(){
    myNumber1 = Number(input.value)
    calc = 1
    input.value = ''
    divideButton.style.opacity = 0.2
    multiButton.style.opacity = 0.2
    plusButton.style.opacity = 0.2
    minusButton.style.opacity = 0.2
    resultButton.style.backgroundColor = 'yellow'
}

function multi(){
    myNumber1 = Number(input.value)
    calc = 2
    input.value = ''
    divideButton.style.opacity = 0.2
    multiButton.style.opacity = 0.2
    plusButton.style.opacity = 0.2
    minusButton.style.opacity = 0.2
    resultButton.style.backgroundColor = 'yellow'
}

function minus(){
    myNumber1 = Number(input.value)
    calc = 3
    input.value = ''
    divideButton.style.opacity = 0.2
    multiButton.style.opacity = 0.2
    plusButton.style.opacity = 0.2
    minusButton.style.opacity = 0.2
    resultButton.style.backgroundColor = 'yellow'
}