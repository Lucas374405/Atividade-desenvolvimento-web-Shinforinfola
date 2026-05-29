const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Mini Netflix',
    descricao: 'Os melhores filmes em um só lugar.'
  });
});

app.listen(3000, () => {
  console.log('Servidor em funcionamento');
});

app.get('/sobre', (req, res) => {
    res.send('sobre');
});

app.get('/contato', (req, res) => {
    res.json({
        'email': 'Aluno@discente.ifpe.edu.br',
        'telefone': '81 99999-9999'
    });
});

app.get('/erro', (req, res) => {
    res.status(404).json({
        'mensagem': 'Erro: Página não encontrada'
    });
});
    
app.get ('/inicio', (req, res) => {
    res.redirect('/');
});