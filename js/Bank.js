let playerChips = [];
let playerMoney = 500;


function withdrawChips(moneyWithdrawn) {
    while (moneyWithdrawn !== 0) {
        if (moneyWithdrawn % 100 === 0) {
            playerChips.push(new Chip(100, "Black"));
            moneyWithdrawn -= 100;
        }
        else if (moneyWithdrawn % 25 === 0) {
            playerChips.push(new Chip(25, "Red"));
            moneyWithdrawn -= 25;
        }
        else if (moneyWithdrawn % 10 === 0) {
            playerChips.push(new Chip(10, "Green"));
            moneyWithdrawn -= 10;
        }
        else if (moneyWithdrawn % 5 === 0) {
            playerChips.push(new Chip(5, "Blue"));
            moneyWithdrawn -= 5;
        }
        else {
            playerChips.push(new Chip(1, "White"));
            moneyWithdrawn -= 1;
        }
    }
}

function sumOfChips() {
    let chipTotal = 0;
    for (i = 0; i <= playerChips.length - 1; i++) {
        chipTotal += playerChips[i].value
    }
    return chipTotal
}

function depositChips(chipsDeposited) {
    playerChips -= chipsDeposited;
    playerMoney += (chipsDeposited * 5);
}

function getPlayerChips() {
    return playerChips
}

function getPlayerMoney() {
    return playerMoney
}

function chipsWin(chipsBet, odds) {
    rawChips = Math.round(chipsBet * odds)
    playerChips += rawChips;
}

function chipsLoss(chipsBet) {
    playerChips -= chipsBet;
}

class Chip {
    constructor(value, color) {
        this.value = value
        this.color = color
    }

}

withdrawChips(453);
sumOfChips()