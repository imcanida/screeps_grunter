// Everything is minified flat, so we can just require(fileName), without worry of folders.

// Include things we want access to.
// var Role = require('game.roles')

// Holder of our creep logic.
let CreepAI = require('creep.ai')

// You can create runnable command line functions you interact with your scripts. or dump data..
global.test = function(msg) {
    console.log(JSON.stringify(msg), ' from the globals')
}

// Main game loop function.
module.exports.loop = function() {

    // Make sure we run our screeps before other things.
    CreepAI.run()

    // Do things in the Context of a Room (Scan for Resources, Scan Structures, etc.)
    for (var key in Game.rooms) {
        var room = Game.rooms[key]
        // Examples -- Make your own things.
        // room.registerBuildManager(buildManager)
        // room.determineThreatLevel()
    }

    // Do things in the Context of a Spawner..
    for (var key in Game.spawns) {
        var spawner = Game.spawns[key];
    }
}