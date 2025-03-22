const express = require('express'); // Corrected 'require' syntax

const app = express(); // Corrected 'app express()' to 'express()'
const port = 3000; // Corrected 'port 3000' to 'const port = 3000'

app.get('/', (req, res) => { // Added missing route path '/'
    res.send("Hello World!");
}); // Added missing closing brace

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`); // Fixed template literal syntax
});
