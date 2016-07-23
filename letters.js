var _ = require('lodash');

var ttt = console.log(new Date());

//var letters={'A':[[,1],[1,,1],[1,,1],[1,1,1],[1,,1]],'B':[[1,1],[1,,1],[1,1,1],[1,,1],[1,1]],'C':[[1,1,1],[1],[1],[1],[1,1,1]],'D':[[1,1],[1,,1],[1,,1],[1,,1],[1,1]],'E':[[1,1,1],[1],[1,1,1],[1],[1,1,1]],'F':[[1,1,1],[1],[1,1],[1],[1]],'G':[[,1,1],[1],[1,,1,1],[1,,,1],[,1,1]],'H':[[1,,1],[1,,1],[1,1,1],[1,,1],[1,,1]],'I':[[1,1,1],[,1],[,1],[,1],[1,1,1]],'J':[[1,1,1],[,,1],[,,1],[1,,1],[1,1,1]],'K':[[1,,,1],[1,,1],[1,1],[1,,1],[1,,,1]],'L':[[1],[1],[1],[1],[1,1,1]],'M':[[1,1,1,1,1],[1,,1,,1],[1,,1,,1],[1,,,,1],[1,,,,1]],'N':[[1,,,1],[1,1,,1],[1,,1,1],[1,,,1],[1,,,1]],'O':[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],'P':[[1,1,1],[1,,1],[1,1,1],[1],[1]],'Q':[[0,1,1],[1,,,1],[1,,,1],[1,,1,1],[1,1,1,1]],'R':[[1,1],[1,,1],[1,,1],[1,1],[1,,1]],'S':[[1,1,1],[1],[1,1,1],[,,1],[1,1,1]],'T':[[1,1,1],[,1],[,1],[,1],[,1]],'U':[[1,,1],[1,,1],[1,,1],[1,,1],[1,1,1]],'V':[[1,,,,1],[1,,,,1],[,1,,1],[,1,,1],[,,1]],'W':[[1,,,,1],[1,,,,1],[1,,,,1],[1,,1,,1],[1,1,1,1,1]],'X':[[1,,,,1],[,1,,1],[,,1],[,1,,1],[1,,,,1]],'Y':[[1,,1],[1,,1],[,1],[,1],[,1]],'Z':[[1,1,1,1,1],[,,,1],[,,1],[,1],[1,1,1,1,1]],'0':[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],'1':[[,1],[,1],[,1],[,1],[,1]],' ':[[,],[,],[,],[,],[,]],'!':[[,1],[,1],[,1],[,],[,1]],':':[[,],[,1],[,],[,1],[,]],')':[[1,],[,1],[,1],[,1],[1,]]};

var letters = {
	'A' : [[, 1], [1, , 1], [1, , 1], [1, 1, 1], [1, , 1]],
	'B' : [[1, 1], [1, , 1], [1, 1, 1], [1, , 1], [1, 1]],
	'C' : [[1, 1, 1], [1], [1], [1], [1, 1, 1]],
	'D' : [[1, 1], [1, , 1], [1, , 1], [1, , 1], [1, 1]],
	'E' : [[1, 1, 1], [1], [1, 1, 1], [1], [1, 1, 1]],
	'F' : [[1, 1, 1], [1], [1, 1], [1], [1]],
	'G' : [[, 1, 1], [1], [1, , 1, 1], [1, , , 1], [, 1, 1]],
	'H' : [[1, , 1], [1, , 1], [1, 1, 1], [1, , 1], [1, , 1]],
	'I' : [[1, 1, 1], [, 1], [, 1], [, 1], [1, 1, 1]],
	'J' : [[1, 1, 1], [, , 1], [, , 1], [1, , 1], [1, 1, 1]],
	'K' : [[1, , , 1], [1, , 1], [1, 1], [1, , 1], [1, , , 1]],
	'L' : [[1], [1], [1], [1], [1, 1, 1]],
	'M' : [[1, 1, , 1, 1], [1, , 1, , 1], [1, , 1, , 1], [1, , , , 1], [1, , , , 1]],
	'N' : [[1, , , 1], [1, 1, , 1], [1, , 1, 1], [1, , , 1], [1, , , 1]],
	'O' : [[1, 1, 1], [1, , 1], [1, , 1], [1, , 1], [1, 1, 1]],
	'P' : [[1, 1, 1], [1, , 1], [1, 1, 1], [1], [1]],
	'Q' : [[0, 1, 1], [1, , , 1], [1, , , 1], [1, , 1, 1], [1, 1, 1, 1]],
	'R' : [[1, 1], [1, , 1], [1, , 1], [1, 1], [1, , 1]],
	'S' : [[1, 1, 1], [1], [1, 1, 1], [, , 1], [1, 1, 1]],
	'T' : [[1, 1, 1], [, 1], [, 1], [, 1], [, 1]],
	'U' : [[1, , 1], [1, , 1], [1, , 1], [1, , 1], [1, 1, 1]],
	'V' : [[1, , , , 1], [1, , , , 1], [, 1, , 1], [, 1, , 1], [, , 1]],
	'W' : [[1, , , , 1], [1, , , , 1], [1, , 1, , 1], [1, , 1, , 1], [1, 1, , 1, 1]],
	'X' : [[1, , , , 1], [, 1, , 1], [, , 1], [, 1, , 1], [1, , , , 1]],
	'Y' : [[1, , 1], [1, , 1], [, 1], [, 1], [, 1]],
	'Z' : [[1, 1, 1, 1, 1], [, , , 1], [, , 1], [, 1], [1, 1, 1, 1, 1]],
	'0' : [[1, 1, 1], [1, , 1], [1, , 1], [1, , 1], [1, 1, 1]],
	'1' : [[, 1], [, 1], [, 1], [, 1], [, 1]],
	' ' : [[0], [0], [0], [0], [0]],
	'!' : [[, 1], [, 1], [, 1], [, ], [, 1]],
	':' : [[, ], [, 1], [, ], [, 1], [, ]],
	')' : [[1, ], [, 1], [, 1], [, 1], [1, ]],
	'.' : [[,], [,], [,], [,], [1,]],
	'*' : [[,1,,1],[1,,1,,1],[1,,,,1],[,1,,1],[,,1]]
};

var rickroll = "Ooh ooh Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you";
var rickwords = rickroll.split(" ");

var circle = [
    {dx:  0, dy: -4},
    {dx:  0, dy: -5},
    {dx:  2, dy: -4},
    {dx: -2, dy: -4},
    
    {dx:  0, dy:  4},
    {dx:  0, dy:  5},
    {dx:  2, dy:  4},
    {dx: -2, dy:  4},
    
    {dx:  4, dy:  0},
    {dx:  5, dy:  0},
    {dx:  4, dy:  2},
    {dx:  4, dy: -2},
    
    {dx: -4, dy:  0},
    {dx: -5, dy:  0},
    {dx: -4, dy:  2},
    {dx: -4, dy: -2}
];

var sector = [
    [ 0,11],
    [ 0,10],
    [-1, 9],
    [ 1, 9],
    
    [ 5, 8],
    [ 5, 9],
    [ 6, 9],
    [ 6,10],
    
    [ 8, 5],
    [ 9, 5],
    [ 9, 6],
    [10, 6]
];

function quadra(s) {
    var res = s.concat([]);
    var last = s;
    for(var i = 0; i < 3; i++) {
        var n = []; // array of (x,y)
        for(var j = 0; j < last.length; j++) {
            var v = last[j];
            n.push([ -v[1], v[0] ]);
        }
        res = res.concat(n);
        last = n;
    }
    return res;
}

var circle2 = quadra(sector);

function siq(l, R) {
    var mod = l % (2*R);
    var quad = Math.floor(l / (2*R));
    var a = Math.min(mod, R);
    var b = Math.min(2*R - mod, R);
    switch(quad % 4) {
        case 0: return  a;
        case 1: return  b;
        case 2: return -a;
        case 3: return -b;
    }
}

function coq(l, R) {
    var mod = l % (2*R);
    var quad = Math.floor(l / (2*R));
    var a = -Math.min(2*R - mod, R);
    var b =  Math.min(mod, R);
    switch(quad % 4) {
        case 0: return  a;
        case 1: return  b;
        case 2: return -a;
        case 3: return -b;
    }
}

function getAlpha() { // -> deg
    var now = new Date();
    var hour = now.getUTCHours() % 12;
    var mins = now.getUTCMinutes();
    var part = mins / 60.0;
    return 360 * (hour + part) / 12.0;
}

function getminAlpha() { // -> deg
    var now = new Date();
    var mins = now.getUTCMinutes();
    return 360 * mins / 60.0;
}

function getArrow(pos0, R) {
    var res = [pos0];
    R = R || 3;
    var part = getAlpha() / 360.0;
    for(var L = 1; L <= R; L++) {
        var fullL = 8*L;
        var l = Math.floor(fullL*part);
        res.push(new RoomPosition(pos0.x + siq(l,L), pos0.y + coq(l,L), pos0.roomName));
    }
    return res;
}

function getminArrow(pos0, R) {
    var res = [];
    R = R || 6;
    var part = getminAlpha() / 360.0;
    for(var L = 2; L <= R; L++) {
        var fullL = 8*L;
        var l = Math.floor(fullL*part);
        res.push(new RoomPosition(pos0.x + siq(l,L), pos0.y + coq(l,L), pos0.roomName));
    }
    return res;
}

function generateClock(pos) {
    if(!pos.x || !pos.y || !pos.roomName)
        return [];
    
    var res = [];
    for(var i = 0; i < circle.length; i++) {
        var d = circle[i];
        res.push(new RoomPosition(pos.x + d.dx, pos.y + d.dy, pos.roomName));
    }
    res = res.concat(getArrow(pos, 2));
    res = res.concat(getminArrow(pos, 6));
    return res;
}

function generateClock2(pos) {
    if(!pos.x || !pos.y || !pos.roomName)
        return [];
    
    var res = [];
    for(var i = 0; i < circle2.length; i++) {
        var v = circle2[i];
        res.push(new RoomPosition(pos.x + v[0], pos.y + v[1], pos.roomName));
    }
    res = res.concat(getArrow(pos, 2));
    res = res.concat(getminArrow(pos, 6));
    return res;
}

function generatePositions(pos, string) {
    var needed = _.map(string.toUpperCase(), l => letters[l] ? l : 'X');
    console.log('LETTERS: '+JSON.stringify(needed)+' -> '+pos);
    
    if(!pos.x || !pos.y || !pos.roomName)
        return [];
    
    var res = [];
    
    var currX = 0;
    for(i = 0; i < needed.length; i++) {
        var character = needed[i];
        var letter = letters[character];
        var addX = 0;
        for(var y = 0; y < letter.length; y++) {
            var row = letter[y];
            for(var x = 0; x < row.length; x++) {
                if (row[x])
                    res.push(new RoomPosition(pos.x + currX + x, pos.y + y, pos.roomName));
            }
            addX = Math.max(addX, row.length);
        }
        currX += addX + 1;
    }
    return res;
}

module.exports = {
    generatePositions: function(pos, string) {
        return generatePositions(pos, string);
    },
    generateClock: function(pos) {
        return generateClock(pos);
    },
    generateClock2: function(pos) {
        return generateClock2(pos);
    },
    getminAlpha: getminAlpha,
};