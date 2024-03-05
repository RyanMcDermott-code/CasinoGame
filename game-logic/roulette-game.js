let amount = 100;
let betType = ['color', 'oddEven', 'highLow'];
let betValue =['red', 'odd', 'low']

class Roulette {
    constructor() {
        this.numbers = Array.from({length: 37}, (_, i) => i);
        this.colors = Array.from({length: 37}, (_, i) => i % 2 == 0 ? 'black' : 'red');
        this.colors[0] = 'green';
    }

    spin() {
        return Math.floor(Math.random() * this.numbers.length);
    }

    bet(amount, betType, betValue) {
        let result = this.spin();
        let payout = 0;
        
        switch (betType) {
            case 'color':
                if (betValue == this.colors[result]) {
                    payout = amount * 2;
                } else {
                    payout -= amount;
                }
                break;
            case 'oddEven':
                if (betValue == 'odd' && result % 2 != 0) {
                    payout = amount * 2;
                } else {
                    payout -= amount;
                }
                break;
            case 'highLow':
                if (betValue == 'high' && result >= 19) {
                    payout = amount * 2;
                } else {
                    payout -= amount;
                }
                break;
            case 'dozen':
                if ((betValue == '1st' && result >= 1 && result <= 12) ||
                    (betValue == '2nd' && result >= 13 && result <= 24) ||
                    (betValue == '3rd' && result >= 25 && result <= 36)) {
                    payout = amount * 4;
                } else {
                    payout -= amount;
                }
                break;
            case 'column':
                if ((betValue == '1st' && (result % 3 == 1 || result == 0)) ||
                    (betValue == '2nd' && (result % 3 == 2 || result == 0)) ||
                    (betValue == '3rd' && (result % 3 == 0))) {
                    payout = amount * 4;
                } else {
                    payout -= amount;
                }
                break;
            case 'square':
                if (betValue.includes(result)) {
                    payout = amount * 10;
                } else {
                    payout -= amount;
                }
                break;
            case 'split':
                if (betValue.includes(result)) {
                    payout = amount * 19;
                } else {
                    payout -= amount;
                }
                break;
            case 'straight':
                if (betValue == result) {
                    payout = amount * 37;
                } else {
                    payout -= amount;
                }
                break;
        }
        
        return payout;
    }
    rouletteGame() {
        let totalPayout = 0;
        for (let i = 0; i < betType.length; i++) {
            totalPayout += this.bet(amount, betType[i], betValue[i]);
        }
        return totalPayout;
    }
}

if (typeof module != 'undefined' && module.exports) {
    module.exports = Roulette;
}

let roulette = new Roulette();
console.log("Total Payout:", roulette.rouletteGame());