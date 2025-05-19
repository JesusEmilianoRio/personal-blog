import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

//Server initial variables.
dotenv.config({path : ".env"});
const app = express();
const port = process.env.SERVER_PORT || 3000;

//__dirname ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Routing
app.get('/', (req, res) => {
    res.send("Hola mundo");
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'register.html'));
});


//Listen on specified port.
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})