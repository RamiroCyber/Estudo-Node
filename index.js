const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./database/db')
const question = require('./database/Question');

//Database



// EJS como view enginer
app.set('view engine', 'ejs');
app.use(express.static('public'));

//BodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//ROTAS
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/question', (req, res) => {
    res.render('question');
});

app.post('/savequestion', (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send('formulario recebido ' + titulo + ' ' + descricao);
});



app.listen(4000, (erro) => {
    if (erro) {
        console.log('Erro ao iniciar o servidor');
    } else {
        console.log('Iniciado com sucesso');
    }
});