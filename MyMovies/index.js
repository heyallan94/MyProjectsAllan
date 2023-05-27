const express = require('express')
const app = express()
const db = require('./db/connection')
const port = 3000

app.listen(port , function(){
    console.log(`Express porta ${port}`)
})

//db connection
db
    .authenticate()//Isso aqui retorna uma promise, por isso usaremos o then
    .then(()=>{
        console.log('Conectou ao banco com sucesso!')
    }) //Note que ao executar essa parte, um arquivo index.db é criado na pasta db
        //Pois DENTRO do arquivo connection.js diz para criar um objeto chamado index.db
        
//routes
app.get('/', (req , res)=>{
    res.send(`URL /. Express porta ${port}`)//npm run dev (nos scripts de dev deve está "dev": nodemon index.js)
})
