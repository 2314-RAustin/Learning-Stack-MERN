const express = require('express');
const cors = require('cors');
const app = express();

//Settings
app.set('port', process.env.PORT || 4000)

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/api/users', (req, res) => res.send('Users Users'));
app.get('/api/notes', (req, res) => res.send('Users Notes'));
app.get('/api/', (req, res) => res.send('Users Default'));

module.exports = app;