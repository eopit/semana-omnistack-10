const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://eopit:eopit123@cluster-1-lii04.gcp.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Quando eh utilizado o
app.use(express.json());
app.use(routes);
// MÉTODOS HTTP
// get, post, put, delete
// get -> pega informacao, listar, etc

// post -> criar alguma coisa, salvar, etc

// put -> editar um usuario

// delete -> deletar algo

// TIPO DE PARAMETROS
// Query Params -> req.query (filtros, ordenacao, etc)

// Route Params -> req.params identificar recurso na alteracao ou remocao

// Body -> req.body criacao ou alteracao de registyro

app.listen(3333);
