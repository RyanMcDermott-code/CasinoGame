class Roulette {
    constructor() {
        this.numbers = Array.from({length: 37}, (_, i) => i);
        this.colors = Array.from({length: 37}, (_, i) => i % 2 === 0 ? 'black' : 'red');
        this.colors[0] = 'green';
    }

    spin() {
        return Math.floor(Math.random() * this.numbers.length);
    }

    bet(amount, guess) {
        let result = this.spin();
        if (guess === this.colors[result] || guess == result) {
            return amount;
        } else {
            return -amount;
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Roulette;
}