const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/CasinoAssets', express.static(path.join(__dirname, 'public/CasinoAssets')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/bank', (req, res) => {
    res.render('bank');
});

app.get('/games', (req, res) => {
    res.render('game-selection');
});

app.get('/games/roulette', (req, res) => {
    res.render('roulette-game');
});

app.get('/games/craps', (req, res) => {
    res.render('craps');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});