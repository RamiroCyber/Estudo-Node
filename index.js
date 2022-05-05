const express = require('express'); // Importando o express
const app = express(); // iniciando o express


app.get("/" , function(req,res){  // rota get recebendo uma função de req e res para enviar uma resposta 
    res.send('Ola mundo');
    res.send('não vai funcionar') // não se envia uma resposta mais de uma vez numa mesma rota
})

app.get("/perfil", function(req,res){
    res.send('Obrigado por entrar no meu Perfil')
})

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro");
    } else {
        console.log("Serviodor iniciado com sucesso")
    }
})

//nodemon serve para poder fazer modificaçoes sem precisar reiniciar o servidor