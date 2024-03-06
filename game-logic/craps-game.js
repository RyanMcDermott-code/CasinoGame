const Player = require('../game-logic/player.js');

class CrapsGame {
    constructor() {
        this.player = new Player();
        this.point = 0;
        this.bets = [];
        this.betTypes = ["Pass", "Don't Pass", "Field", "Hard4", "Hard6", "Hard8", "Hard10", "7", "3", "2", "11", "12", "Craps"];
    }

    checkOn() {
        return this.point !== 0;
    }

    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }

    resolveRoll() {
        let die1 = this.roll();
        let die2 = this.roll();
        let sum = die1 + die2;

        if (this.checkOn()) {
            this.bets.forEach(bet => {
                switch (bet.Bet) {
                    case "Pass":
                        if (this.point == sum) {
                            this.player.money += bet.Amount;
                        } else if (sum == 7) {
                            this.player.money -= bet.Amount;
                        }
                        break;
                    case "Don't Pass":
                        if (this.point == sum) {
                            this.player.money -= bet.Amount;
                        } else if (sum == 7) {
                            this.player.money += bet.Amount;
                        }
                        break;
                    case "Field":
                        if ([3, 4, 9, 10, 11].includes(sum)) {
                            this.player.money += bet.Amount;
                        } else if (sum == 2) {
                            this.player.money += bet.Amount * 2;
                        } else if (sum == 12) {
                            this.player.money += bet.Amount * 3;
                        }
                        break;
                    case "Hard4":
                    case "Hard10":
                        if ((sum == 4 || sum == 10) && die1 == die2) {
                            this.player.money += bet.Amount * 7;
                        }
                        break;
                    case "Hard6":
                    case "Hard8":
                        if ((sum == 6 || sum == 8) && die1 == die2) {
                            this.player.money += bet.Amount * 9;
                        }
                        break;
                    case "7":
                        if (sum == 7) {
                            this.player.money += bet.Amount * 4;
                        }
                        break;
                    case "3":
                    case "11":
                        if (sum == 3 || sum == 11) {
                            this.player.money += bet.Amount * 15;
                        }
                        break;
                    case "2":
                    case "12":
                        if (sum == 2 || sum == 12) {
                            this.player.money += bet.Amount * 30;
                        }
                        break;
                    case "Craps":
                        if ([2, 3, 12].includes(sum)) {
                            this.player.money += bet.Amount * 7;
                        }
                        break;
                }
            });
        } else {
            let passBet = this.bets.find(bet => bet.Bet == "Pass");
            let dontPassBet = this.bets.find(bet => bet.Bet == "Don't Pass");
            if (sum == 7 || sum == 11) {
                if (passBet) {
                    this.player.money += passBet.Amount;
                } else if (dontPassBet) {
                    this.player.money -= dontPassBet.Amount;
                }
            } else if (sum == 2 || sum == 3 || sum == 12) {
                if (passBet) {
                    this.player.money -= passBet.Amount;
                } else if (dontPassBet) {
                    this.player.money += dontPassBet.Amount;
                }
            } else {
                this.point = sum;
            }
        }
    }

    bet(amount, betType) {
        if (this.betTypes.includes(betType)) {
            this.bets.push({ Bet: betType, Amount: amount });
        } else {
            console.log("Invalid bet type.");
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CrapsGame;
}
