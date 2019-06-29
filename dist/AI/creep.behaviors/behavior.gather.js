var Role = require('game.roles')

Creep.prototype.gather = function(findType) {
    let response = {
        delayed: false,
        actionOccured: false,
        errCode: 0,
        //target.. anything else?
    }

    findType = findType ? findType : FIND_DROPPED_RESOURCES
    if (this.memory.gatherIterator === undefined) {
        this.memory.gatherIterator = 2
    }
    if (this.memory.gatherIterator < this.gatherDelay) {
        this.memory.gatherIterator += 1
        response.actionOccured = false
        response.delayed = true
        return response
    }

    let ignoredLocations = []
    if (this.memory.role !== Role.upgrader && this.memory.role !== Role.generalist ) {
        let controllerDump = _.first(this.room.find(FIND_FLAGS).filter((flag) => flag.name.indexOf('DC:' + this.room.name) >= 0))
        if (controllerDump) {
            ignoredLocations.push(controllerDump.pos)
        }
    }

    if (this.memory.role !== Role.transport && this.memory.role !== Role.generalist) {
        let remoteDump = _.first(this.room.find(FIND_FLAGS).filter((flag) => flag.name.indexOf('RC:' + this.room.name) >= 0))
        if (remoteDump) {
            ignoredLocations.push(remoteDump.pos)
        }
    }

    if (this.memory.role !== Role.builder) {
        let builderDump = _.first(this.room.find(FIND_FLAGS).filter((flag) => flag.name.indexOf('BD:' + this.room.name) >= 0))
        if (builderDump) {
            ignoredLocations.push(builderDump.pos)
        }
    }

    var resourceOnGround = _.first(this.pos.findInRange(findType, this.gatherRange).filter((pool) => pool.id))
    if (resourceOnGround) {
        let isKnownPool = ignoredLocations.find((pos) => resourceOnGround.pos.getRangeTo(pos) === 0)
        if (isKnownPool) {
            return response
        }

        let errCode = this.pickup(resourceOnGround)
        if (!errCode) {
            response.actionOccured = true
        }

        response.errCode = errCode
        response.target = resourceOnGround
    }
    return response
}
