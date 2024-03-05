const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const Roulette = require('./game-logic/roulette-game');

let game = new Roulette();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

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

app.get('/games/craps', (req, res) => {
    res.render('craps-game', { result: '' });
});

app.all('/games/roulette', (req, res) => {
    if (req.method === 'POST') {
        let { guess } = req.body;
        let result = game.bet(100, guess);
        res.render('roulette-game', { result: `You ${result > 0 ? 'won' : 'lost'} ${Math.abs(result)}` });
    } else {
        res.render('roulette-game', { result: '' });
    }
});

app.get('/games/craps', (req, res) => {
    res.render('craps');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});