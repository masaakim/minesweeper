var _ = require('lodash')

module.exports = Field

function Field (options) {
    if (!this instanceof Field) {
        return new Field(size, bomb)
    }

    options = options || {}
    this.size = options.size
    this.bomb = options.bomb

    this.field = this.init()
}

Field.prototype.init = function () {
    var field = []
    var tmpField = []
    var bombNum = 0
    var fieldNum = Math.pow(this.size, 2)

    for (var i = 0; i < fieldNum; i++) {
        if (bombNum < this.bomb) {
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

    var self = this
    tmpField.forEach(function (tmp) {
        field.push(tmp)

        if (field.length === self.size) {
            matrixField.push(field)
            field = []
        }
    })

    return this.setNumber(matrixField)
}

Field.prototype.setNumber = function (field) {
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
                if (i - 1 >= 0 && j + 1 <= this.size - 1) {
                    if (field[i - 1][j + 1].val !== 'B') {
                        field[i - 1][j + 1].val++
                    }
                }

                if (i >= 0 && j - 1 >= 0) {
                    if (field[i][j - 1].val !== 'B') {
                        field[i][j - 1].val++
                    }
                }
                if (i >= 0 && j + 1 <= this.size - 1) {
                    if (field[i][j + 1].val !== 'B') {
                        field[i][j + 1].val++
                    }
                }

                if (i + 1 <= this.size - 1 && j - 1 >= 0) {
                    if (field[i + 1][j - 1].val !== 'B') {
                        field[i + 1][j - 1].val++
                    }
                }
                if (i + 1 <= this.size - 1 && j >= 0) {
                    if (field[i + 1][j].val !== 'B') {
                        field[i + 1][j].val++
                    }
                }
                if (i + 1 <= this.size - 1 && j + 1 <= this.size - 1) {
                    if (field[i + 1][j + 1].val !== 'B') {
                        field[i + 1][j + 1].val++
                    }
                }
            }
        })
    })

    return field
}
