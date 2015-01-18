var _ = require('lodash')

module.exports = Minesweeper

function Minesweeper (options) {
    if (!this instanceof Minesweeper) {
        return new Minesweeper(options)
    }

    options = options || {
        size: 10,
        bomb: 15
    }

    this.size = options.size
    this.bomb = options.bomb

    this.field = init(this.size, this.bomb)
}

function init (size, bomb) {
    var field = []
    var tmpField = []
    var bombNum = 0
    var fieldNum = Math.pow(size, 2)

    for (var i = 0; i < fieldNum; i++) {
        if (bombNum < bomb) {
            tmpField.push({
                open: false,
                check: false,
                val: 'B'
            })
            bombNum++
        }
        else {
            tmpField.push({
                open: false,
                check: false,
                val: 0
            })
        }
    }

    tmpField = _.shuffle(tmpField)

    var matrixField = []

    tmpField.forEach(function (tmp) {
        field.push(tmp)

        if (field.length === size) {
            matrixField.push(field)
            field = []
        }
    })

    return setNumber(matrixField)
}

function setNumber (field) {
    field.forEach(function (row, i) {
        row.forEach(function (square, j) {
            if (square.val === 'B') {
                if (i - 1 >= 0 && j - 1 >= 0) {
                    if (field[i - 1][j - 1].val !== 'B') {
                        field[i - 1][j - 1].val++
                    }
                }
                if (i - 1 >= 0 && j >= 0) {
                    if (field[i - 1][j].val !== 'B') {
                        field[i - 1][j].val++
                    }
                }
                if (i - 1 >= 0 && j + 1 <= 9) {
                    if (field[i - 1][j + 1].val !== 'B') {
                        field[i - 1][j + 1].val++
                    }
                }

                if (i >= 0 && j - 1 >= 0) {
                    if (field[i][j - 1].val !== 'B') {
                        field[i][j - 1].val++
                    }
                }
                if (i >= 0 && j + 1 <= 9) {
                    if (field[i][j + 1].val !== 'B') {
                        field[i][j + 1].val++
                    }
                }

                if (i + 1 <= 9 && j - 1 >= 0) {
                    if (field[i + 1][j - 1].val !== 'B') {
                        field[i + 1][j - 1].val++
                    }
                }
                if (i + 1 <= 9 && j >= 0) {
                    if (field[i + 1][j].val !== 'B') {
                        field[i + 1][j].val++
                    }
                }
                if (i + 1 <= 9 && j + 1 <= 9) {
                    if (field[i + 1][j + 1].val !== 'B') {
                        field[i + 1][j + 1].val++
                    }
                }
            }
        })
    })

    return field
}


// input: "open row column"
Minesweeper.prototype.open = function (str) {
    if (input(str).command === 'open') {
        var row = input(str).row
        var column = input(str).column

        this.field[row][column].open = true
    }
}

function input (str) {
    input = input.split(' ')

    return {
        command: input[0],
        row: input[1],
        column: input[2]
    }
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
}

Minesweeper.prototype.quit = function () {
}
