const Roulette = require('../game-logic/roulette-game');

const roulette = new Roulette();

const amount = 10;
const betTypes = ['color', 'oddEven', 'highLow', 'dozen', 'column', 'square', 'split', 'straight'];
const betValues = ['red', 'odd', 'high', '1st', '1st', [1, 2], [1, 4], 5];

roulette.rouletteGame(amount, betTypes, betValues);

console.log('Player money:', roulette.player.money);
