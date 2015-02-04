var test = require('tape')
var Minesweeper = require('../lib/minesweeper')
var minesweeper = new Minesweeper()

minesweeper.field = [
    [ { open: false, check: false, val: 1 },
      { open: false, check: false, val: 'B' },
      { open: false, check: false, val: 0 },
      { open: false, check: false, val: 1 },
      { open: false, check: false, val: 1 } ],
    [ { open: false, check: false, val: 2 },
      { open: false, check: false, val: 1 },
      { open: false, check: false, val: 0 },
      { open: false, check: false, val: 1 },
      { open: false, check: false, val: 'B' } ],
    [ { open: false, check: false, val: 'B' },
      { open: false, check: false, val: 'B' },
      { open: false, check: false, val: 1 },
      { open: false, check: false, val: 0 },
      { open: false, check: false, val: 0 } ],
    [ { open: false, check: false, val: 0 },
      { open: false, check: false, val: 1 },
      { open: false, check: false, val: 'B' },
      { open: false, check: false, val: 0 },
      { open: false, check: false, val: 0 } ],
    [ { open: false, check: false, val: 0 },
      { open: false, check: false, val: 0 },
      { open: false, check: false, val: 0 },
      { open: false, check: false, val: 0 },
      { open: false, check: false, val: 0 } ]
]

test('minesweeper.open()', function (t) {
    var expected = 'B'
    var actual = minesweeper.open(0, 1)
    t.equal(actual, expected)
    t.end()
})

test('minesweeper.check()', function (t) {
    var expected = true
    minesweeper.check(1, 1)
    var actual = minesweeper.field[1][1].check
    t.equal(actual, expected)
    t.end()
})

test('minesweeper.isGameOver()', function (t) {
    minesweeper.field[0][1].open = true
    var expected = true
    var actual = minesweeper.isGameOver()
    t.equal(actual, expected)
    t.end()
})
