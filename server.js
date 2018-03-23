const express = require('express');//require it
const app = express()//constructor

app.get('/',(req, res)=>(
    res.sendStatus('now you\'ve done it!'))
)
app.post('/', (req, res)=>(console.log(req.body.message))
)

app.listen('9000', ()=> console.log('app running on port 9000'))