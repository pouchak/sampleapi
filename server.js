const express = require('express');//require it
const app = express()//constructor

app.get('/',(req, res)=>(
    res.sendStatus(200))
)
app.post('/', (req, res)=>(console.log(req.body.message))
)

app.listen('80', ()=> console.log('app running on port 9000'))