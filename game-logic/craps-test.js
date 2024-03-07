const CrapsGame = require('../game-logic/craps-game');
const game = new CrapsGame();

game.bet(10, "Pass");
game.bet(20, "Field");
game.bet(15, "Hard6");

function simulateSingleRoll() {
    console.log("Rolling the dice...");
    game.resolveRoll();
    console.log(`Player's money after the roll: ${game.player.money}`);
    console.log();
}

simulateSingleRoll();
simulateSingleRoll();
simulateSingleRoll();

module.exports = CrapsGame;