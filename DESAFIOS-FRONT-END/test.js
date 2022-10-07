let myArray = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Peter"},
    {"id": 3, "name": "Harry"}
];

let myArray2 = [
    {"id": 3, "name": "Fujhin"},
    {"id": 1, "name": "William"},
    {"id": 2, "name": "Beth"}
]

function exist(Array , Array2){
    console.log(Object.keys(Array2[0])/*Array2[0]*/)
    for(let i = 0; i<Array2.length; i++){
        if( "id" in Array2[i] ){//Colocar nome da propriedade e fazer loop com a seguinte, Array2[i]
        console.log(`Check ${i+1}`)
        }
    }
    
}

exist(myArray , myArray2)
