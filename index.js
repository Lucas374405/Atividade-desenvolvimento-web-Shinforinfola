const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Atividade',
    descricao: 'Precisa de descrição?'
  });
});

app.listen(3000, () => {
  console.log('Servidor funcionando');
});

app.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema');
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

app.get ('/Usuario/:id', (req, res) => {
    res.send(`Usuario: ${req.params.id}`);
});

app.get ('/produto/:nome', (req, res) => {
    res.send(`Produto: ${req.params.nome}`);
});

app.get ('/filme/:id/:nome', (req, res) => {
    res.send (`
        Filme: ${req.params.nome} <br>
        ID: ${req.params.id}
    `)
});

app.get ('/buscar', (req, res) => {
    res.send (`buscar: ${req.query.nome}`);
});

app.get ('/produto', (req, res) => {
    res.send (`
       Categoria: ${req.query.categoria} <br>
       Página: ${req.query.pagina} 
        `);
});
