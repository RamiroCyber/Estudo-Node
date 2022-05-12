const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Question = require('./database/Question');
const Answer = require('./database/Answer')

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
        order: [['id', 'DESC']]

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
        where: { id: id }

    }).then(question => {
        if (question != undefined) {
            Answer.findAll({
                where: { questionId: question.id },
                order: [ ['id', 'DESC'] ]
                
            }).then(answers => {
                res.render('questionparam', {
                    question: question,
                    answers: answers
                });
            });
        } else {
            res.redirect('/');
        }
    });
});

app.post('/reply', (req, res) => {
    let answerbody = req.body.body
    let questionId = req.body.question
    Answer.create({
        body: answerbody,
        questionId: questionId
    }).then(() => {
        res.redirect('/question/' + questionId)
    })

});



app.listen(4000, (erro) => {
    if (erro) {
        console.log('Erro ao iniciar o servidor');
    } else {
        console.log('Iniciado com sucesso');
    }
});