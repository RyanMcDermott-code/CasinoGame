const Chip = require('../game-logic/chip.js');

class Player {
    constructor() {
        //this.chips = [];
        this.money = 500;
    }

//     withdrawChips(moneyWithdrawn) {
//         const denominations = [
//             { value: 100, color: "Black" },
//             { value: 25, color: "Red" },
//             { value: 10, color: "Green" },
//             { value: 5, color: "Blue" },
//             { value: 1, color: "White" }
//         ];

//         denominations.forEach(denom => {
//             while (moneyWithdrawn >= denom.value) {
//                 this.chips.push(new Chip(denom.value, denom.color));
//                 moneyWithdrawn -= denom.value;
//             }
//         });
//     }

//     sumOfChips() {
//         return this.chips.reduce((total, chip) => total + chip.value, 0);
//     }

//     depositChips(chipsToDeposit) {
//         let amountDeposited = 0;
//         chipsToDeposit.forEach(chipToDeposit => {
//             let index = this.chips.findIndex(chip => chip.value === chipToDeposit.value && chip.color === chipToDeposit.color);
//             if (index !== -1) {
//                 this.chips.splice(index, 1);
//                 amountDeposited += chipToDeposit.value;
//             }
//         });
//         this.money += amountDeposited;
//     }

//     getChips() {
//         return this.chips;
//     }

    getMoney() {
        return this.money;
    }

//     Earn(chipsBet, odds) {
//         let winnings = Math.round(chipsBet * odds);
//         this.money += winnings;
//     }

//     Lose(chipsBet) {
//         this.money -= chipsBet;
//     }
}

module.exports = Player;
