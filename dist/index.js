const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require('./routers/index'));
app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(3000);
console.log('Server on port 3000');