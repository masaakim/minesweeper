var Field = require('./field')

module.exports = Minesweeper

function Minesweeper (options) {
    if (!this instanceof Minesweeper) {
        return new Minesweeper(options)
    }

    var field = new Field(options)
    this.field = field.field
    this.size = field.size
    this.bomb = field.bomb
}

// input: "open row column"
Minesweeper.prototype.open = function (str) {
    if (input(str).command === 'open') {
        var row = input(str).row
        var column = input(str).column
        this.field[row][column].open = true
    }

    return this.field[row][column].val
}

function input (str) {
    input = input.split(' ')

    return {
        command: input[0],
        row: input[1],
        column: input[2]
    }
}

function gameOver (field) {
    field.forEach(function (row) {
        row.forEach(function (square) {
            if (square.open === true && square.val === 'B') {
                return false
            }
        })
    })

    return true
}

Minesweeper.prototype._isGameOver = function () {
    this.field.forEach(function (row) {
        row.forEach(function (square) {
            if (square.open === true && square.val === 'B') {
                return false
            }
        })
    })

    return true
}

Minesweeper.prototype.check = function (input) {
    if (input(str).command === 'check') {
        var row = input(str).row
        var column = input(str).column

        if (this.field[row][column].check) {
            this.field[row][column].check = false
        }
        else {
            this.field[row][column].check = true
        }
    }
}

Minesweeper.prototype.help = function () {
    var help = [
        'Usage: minesweeper [options]',
        '',
        'Options:',
        '  -s, --size  set field size',
        '  -b, --bomb  set number of bombs',
        '',
        'Command:',
        '  open <row> <column>   open the given square',
        '  check <row> <column>  check the given square',
        '  quit                  quit playing',
        '  help                  output command information',
    ]

    console.log(help.join('\n'))
}

Minesweeper.prototype.quit = function () {
}