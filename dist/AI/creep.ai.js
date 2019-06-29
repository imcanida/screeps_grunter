var Roles = require('game.roles')

// Add in more?
var roleGeneralist = require('role.generalist')

var CreepAI = {
    run: function() {
        // let countAiRan = 0
        // var startCpu = Game.cpu.getUsed();
        for (var name in Game.creeps) {
            var creep = Game.creeps[name]
            var room = creep.room

            if (!creep.memory.id) {
                creep.memory.id = creep.id
            }

            if (creep.spawning) {
                continue;
            }
            
            switch (creep.memory.role) {
                case Roles.generalist:
                    roleGeneralist.run(creep)
                    break
                // Add in more.
            }
            // countAiRan += 1
            // console.log(JSON.stringify(creep.name))
        }

        // var elapsed = Game.cpu.getUsed() - startCpu;
        // console.log(elapsed)
        // console.log(JSON.stringify(countAiRan), ': ai ran')
    }
}
module.exports = CreepAI
