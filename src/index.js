const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000;

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use(require('./routers/index'))
app.get("/", (req, res) => {
    res.json({ message: "Hello from server!!" });
    }); 

app.listen(puerto);
console.log('Server on port 3000')