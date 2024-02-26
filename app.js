const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');
const upload = multer();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro');
});
app.get('/usuario', (req, res) => {
        res.render('usuario')
});

// app.listen(8000, () => {
//     console.log('Sistema iniciado no port: 8000');
// });
