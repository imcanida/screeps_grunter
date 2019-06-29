let Roles = require('game.roles')

Creep.prototype.allyInRange = {}
Creep.prototype.setAllyInRange = function(ally) {
    this.allyInRange = ally
    this.memory.allyInRange = ally.id
} 
Creep.prototype.transferToAlly = function(range, checkRate) {
    let response = {
        delayed: false,
        actionOccured: false,
        errCode: 0,
        //target.. anything else?
    }

    if (!this.memory.lastTransferCheck) {
        this.memory.lastTransferCheck = 0
    }

    let ally
    if (this.memory.lastTransferCheck < checkRate) {
        if(this.allyInRange) {
            ally = this.allyInRange
        }
        this.memory.lastTransferCheck++
        response.delayed = true
    } else {
        this.memory.lastTransferCheck = 0
        var alliesInRange = this.pos.findInRange(FIND_MY_CREEPS, 1).filter((obj) => obj.carry.energy < obj.carryCapacity 
            && obj.memory.role != Roles.transport 
            && obj.memory.role != Roles.miner
            && obj.memory.role != Roles.generalist)
        ally = _.first(alliesInRange)
    }

    if (ally) {
        this.setAllyInRange(ally)
        response.target = ally
        response.errCode = this.transfer(ally, RESOURCE_ENERGY)
    }
    return response
}
