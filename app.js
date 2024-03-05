const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const port = 3000;

const Roulette = require('./game-logic/roulette-game');
const Player = require('./game-logic/player.js');

let game = new Roulette();

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
    if (req.session.player) {
      let tempPlayer = new Player();
      Object.assign(tempPlayer, req.session.player);
      req.session.player = tempPlayer;
    } else {
      req.session.player = new Player();
    }
    next();
  });
  

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/CasinoAssets', express.static(path.join(__dirname, 'public/CasinoAssets')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/bank', (req, res) => {
    res.render('bank', { money: req.session.player.getMoney() });
});

app.get('/games', (req, res) => {
    res.render('game-selection');
});

app.get('/games/craps', (req, res) => {
    res.render('craps-game', { result: '' });
});

app.get('/games/roulette', (req, res) => {
    let currentMoney = req.session.player.getMoney();
    res.render('roulette-game', { result: '', money: currentMoney });
});


app.post('/games/roulette', (req, res) => {
    let { guess, amount } = req.body; 
    amount = parseInt(amount, 10); 

    if (!Number.isNaN(amount) && amount > 0) {
        const isWin = game.rouletteGame(req.session.player.getMoney(), guess, amount);
        let currentMoney = req.session.player.getMoney();
        let resultMessage = isWin ? `You won ${amount * 35}` : `You lost ${amount}`;
        res.render('roulette-game', { result: resultMessage, money: currentMoney });
    } else {
        let currentMoney = req.session.player.getMoney();
        res.render('roulette-game', { result: 'Invalid bet amount.', money: currentMoney });
    }
});



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
