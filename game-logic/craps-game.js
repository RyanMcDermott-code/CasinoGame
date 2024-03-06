const Player = require('../game-logic/player.js');

class CrapsGame {
    player = new Player()
    constructor() {
        this.point = 0
        this.bets = [];
        this.betTypes = ["Pass", "Don't Pass", "Field", "Hard4", "Hard6", "Hard8", "Hard10", "7", "3", "2", "11", "12", "Craps"]
    }

    checkOn(){
        return this.point !== 0
    }
    roll(){
        return  Math.floor(Math.random() * 7)
    }

    resolveRoll(){
        let die1 = this.roll();
        let die2 = this.roll();
        let sum = die1 + die2;
        if(this.checkOn()){
            this.bets.forEach(bet =>{
                switch (bet.Bet){
                    case "Pass":
                        if(this.point === sum){
                            this.player.money += (bet.Amount * 2);
                        }else if (sum === 7) {
                            this.player.money -= bet.Amount;
                        }
                        break;
                    case "Don't Pass":
                        if(this.point === sum){
                            this.player.money -= bet.Amount;
                        }else if (sum === 7){
                            this.player.money += (bet.Amount * 2)
                        }
                        break;

                        finally:

                }
            })

        }
    }
    bet(amount, betType) {
        this.betTypes.forEach(bet =>{
            if(betType === bet){
                this.bets.push({Bet: betType,Amount: amount})
            }
        })
    }
}