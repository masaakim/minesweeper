module.exports = Minesweeper

function Minesweeper (options) {
    if (!this instanceof Minesweeper) {
        return new Minesweeper(options)
    }

    options = options || {
        size: 10,
        bomb: 10
    }

    this.size = options.size
    this.bomb = options.bomb

    this.field = init(this.size, this.bomb)
}

function init (size, bomb) {
}

Minesweeper.prototype.open = function (input) {
}

Minesweeper.prototype.check = function (input) {
}

Minesweeper.prototype.help = function () {
}

Minesweeper.prototype.quit = function () {
}
