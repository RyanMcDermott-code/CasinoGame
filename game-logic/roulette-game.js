const Player = require('../game-logic/player.js');
 
class Roulette {
    player = new Player();
    constructor() {
        this.numbers = Array.from({length: 37}, (_, i) => i);
        this.colors = Array.from({length: 37}, (_, i) => i % 2 === 0 ? 'black' : 'red');
        this.colors[0] = 'green';
    }

    spin() {
        return Math.floor(Math.random() * this.numbers.length);
    }

    bet(player, guess, amount) {
        let result = this.spin();
        const isWin = guess === this.colors[result] || guess == result;
        const odds = isWin ? 35 : 0; 
        if (isWin) {
            player.winBet(amount, odds);
        } else {
            player.loseBet(amount);
        }
        return isWin;
    }
    
}
module.exports = Roulette;
