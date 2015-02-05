#!/usr/bin/env node

var pkg = require('../package.json')
var Minesweeper = require('../lib/minesweeper')

var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
    boolean: [
        'help',
        'versions'
    ],
    alias: {
        h: 'help',
        V: 'versions'
    }
})


if (argv.V) {
    console.log(pkg.version)
}

if (argv.h) {
    var ms = new Minesweeper()
    ms.help()
}

if (!argv.V && !argv.h) {
    var options = {}
    if (argv.s) {
        options.size = argv.s
    }
    else {
        options.size = 10
    }
    if (argv.b) {
        options.bomb = argv.b
    }
    else {
        options.bomb = 15
    }

    var minesweeper = new Minesweeper(options)

}
