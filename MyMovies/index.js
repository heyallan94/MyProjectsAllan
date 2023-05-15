const express = require('express')
const app = express()
const port = 3000

app.listen(port , function(){
    console.log(`Express porta ${port}`)
})

app.get('/', (req , res)=>{
    res.send(`URL /. Express porta ${port}`)//npm run dev (nos scripts de dev deve está "dev": nodemon index.js)
})
