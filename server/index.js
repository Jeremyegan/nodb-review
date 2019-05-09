const express = require('express');
const {json} = require('body-parser');
const ctrl = require('./controller');
const app = express();

app.use(express(json()));

app.get('/api/pokemon', ctrl.getPokemon);
app.delete('/api/pokemon/:id', ctrl.deletePokemon);

const server_port = 4040;
app.listen(server_port, () => console.log(`I choose you on  port ${server_port}`))