const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = {
    id : 1, 
    email : 'user@example.com'
}

app.get('/', (req, res) => {
    res.send('Welcome to backend');
})


app.listen(port , () =>{
    console.log(`Server is running on the port: ${port}`)
})