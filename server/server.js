require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {SERVER_PORT} = process.env;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

const {
    loadPage,
    getTickets
} = require('./controller');

app.get('/', loadPage)
app.get('/api/home', getTickets)

app.listen(SERVER_PORT, () => console.log(`App running on ${SERVER_PORT}`))