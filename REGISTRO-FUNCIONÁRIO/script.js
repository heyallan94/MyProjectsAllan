
function save(){
    let name = window.document.getElementById('nome')
    let age = window.document.getElementById('idade')
    let city = window.document.getElementById('cidade')
    let skill = window.document.getElementById('cargo')
    let wageInput = window.document.getElementById('salario')   
    let employee = window.document.getElementById('employee')

    employeeNumber++
    employee.textContent = `Número de funcionários: ${employeeNumber}`
    
    wageNumber = wageNumber + Number(wageInput.value)

    let wageCost = window.document.getElementById('wage-cost')
    wageCost.textContent = `Gasto salarial total: ${wageNumber},00R$`
    
    
    let wageCostPerson = window.document.getElementById('wage-cost-person')
    wageCostPersonNumber = wageNumber / employeeNumber
    wageCostPerson.textContent = `Gasto por pessoa: ${Math.ceil(wageCostPersonNumber)},00`    
    
    let historic = window.document.getElementById('historic')
    let newCard = document.createElement('div')
    
    newCard.className = "card"
    newCard.style.whiteSpace = "white-space"
    newCard.textContent = `${name.value}, ${age.value}. ${city.value}, ${skill.value}. R$${wageInput.value}`
    historic.appendChild(newCard)

    name.value = ''
    age.value = ''
    city.value = ''
    skill.value = ''
    wageInput.value = ''
}

let employeeNumber = 0
let wageNumber = 0
let wageCostPersonNumber = 0

