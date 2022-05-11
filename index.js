const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./database/db')
const Question = require('./database/Question');

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
    Question.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ]
    }).then(questions => {
        console.log(questions);
        res.render('index', {
            questions: questions
        });
    });
});

app.get('/question', (req, res) => {
    res.render('question');
});

app.post('/savequestion', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    Question.create({
        title: title,
        description: description
    }).then(() => {
        res.redirect('/');
    });
});

app.get('/question/:id', (req, res) => {
    let id = req.params.id;
    Question.findOne({
        where: {
            id: id
        }
    }).then(question => {
        if (question != undefined) {
            res.render('questionparam', {
                question: question
            });
        } else {
            res.redirect('/');
        }
    });
});



app.listen(4000, (erro) => {
    if (erro) {
        console.log('Erro ao iniciar o servidor');
    } else {
        console.log('Iniciado com sucesso');
    }
});