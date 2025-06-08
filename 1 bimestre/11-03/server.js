// importa o express
const express = require('express');
// instancia o express e atribui a "app"
const app = express();
// possibilita que express reconheça objetos request
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// rota GET URL /curriculo pra mostrar
app.get('/curriculo', (req, resp) => {
    resp.sendFile(__dirname + '/curriculo.html'); 
});

// rota POST URL /curriculo pra enviar
app.post('/curriculo', (req, resp) => {
    console.log(req.body); // dados do form
    resp.send('<h1>[OK] Obrigada pelo contato!</h1>');
});

console.log('Servidor Executando...')
// coloca a aplicação para ouvir a porta 3000
app.listen(3000)


//limpar processos:
//netstat -ano | findstr :3000
//taskkill /PID <PID-encontrado> /F