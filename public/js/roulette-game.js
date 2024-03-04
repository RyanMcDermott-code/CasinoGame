class Roulette {
    constructor() {
        this.numbers = this.generateNumbers();
    }

    generateNumbers() {
        let numbers = [];
        for (let i = 0; i <= 36; i++) {
            numbers.push({
                number: i,
                color: i === 0 ? 'green' : i % 2 === 0 ? 'black' : 'red'
            });
        }
        return numbers;
    }

    spin() {
        return this.numbers[Math.floor(Math.random() * this.numbers.length)];
    }

    bet(amount, betType) {
        let result = this.spin();
        console.log(`The result is ${result.number} ${result.color}`);

        if (typeof betType === 'number') {
            if (betType === result.number) {
                return amount * 35;
            }
        } else if (betType === 'red' || betType === 'black') {
            if (betType === result.color) {
                return amount * 2;
            }
        }

        return -amount;
    }
}

let game = new Roulette();
let result = game.bet(100, 'red');
console.log(`You ${result > 0 ? 'won' : 'lost'} ${Math.abs(result)}`);