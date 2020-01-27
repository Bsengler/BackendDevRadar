const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:omnistackteste@cluster0-hpzpa.mongodb.net/week10?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true,

});

app.use(express.json()); //use - ser valido para todas as rotas da aplicação
app.use(routes);


//Metodos HTTP: GET, POST, PUT, DELETE


//Tipos de paramentros dentro do express:

//Query Params: request.query (Filtros, ordenação, paginação..) - 90% usado no get
//Route Params: request.params (Identificar um recurso na alteração ou remoção) - utilizado PUT e DELETE
//Body: rqeust.body (Dados para a criação ou alteração de um registro) - usado em POST e PUT

//MongoDB (Não-relacional)



app.listen(3333); //definindo port