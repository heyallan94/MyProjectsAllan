/*Faça uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, um objeto
com dados que vão atualizar o objeto do primeiro parâmetro.
Obs: se no objeto do segundo parâmetro tiver dados que o objeto do primeiro não tem, o valor não deve
persistir no objeto de retorno da função. Somente são atualizados os dados que o objeto do primeiro
parâmetro possuir.
Ex: updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 }) --> saida: { name:
'Marcos', country: 'Japão', age: 33 }
Ex: updateData({ name: "Marcos", country: "Brasil", age: 22 }, { price: 89.9, amount: 15, description:
"camiseta 100% algodão" }) --> saida: { name: "Marcos", country: "Brasil", age: 22 }
Ex: updateData({ name: "Rafael", country: "Chile", age: 42 }, { name: "Camiseta Polo", price: 59.9, amount: 30
}) --> saida: { name: "Rafael", country: "Chile", age: 42 }

Código:

function updateData(currentObject, newDataObject) {
your code here...
}*/

const customer1 = ({
    name: "Douglas", 
    country: "Portugal",
    age: 19 
})

const customer2 = ({
    name: "Douglas",
    country: "Brasil",
    age: 28,
    price : 4
})

const customer3 = ({
    name: "Juan",
    country: "Argentina",
    age: 35
})

//const customer4 = {...customer3}



function updateData(a, b) {
    for(let i = 0; i < Object.keys(a).length ; i++){ //Criei esse loop para percorrer todas as propriedades do objeto A
        if(Object.keys(a)[i] == Object.keys(b)[i]){ //se o nome da propriedade do objeto A for igual ao nome da propriedade do objeto B
            a[Object.keys(a)[i]] = b[Object.keys(b)[i]]//então o valor da propriedade A recebe o valor da propriedade B
        }
    }
}

console.log(customer1)

updateData(customer1 , customer2)

console.log(customer1)