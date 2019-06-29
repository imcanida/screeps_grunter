var Navigation = require('navigation.pathing')

Creep.prototype.moveOptions = {}
Creep.prototype.moveIt = function() {

    // console.log(JSON.stringify(Game.cpu.bucket))
    let response = {
        delayed: false,
        actionOccured: false,
        errCode: 0,
        //target.. anything else?
    }

    if (this.fatigue > 0) {
        response.errCode = ERR_TIRED
        return response
    }

    if (this.memory._move) {
        if (!this.memory._move.path) {
            // console.log(JSON.stringify('no path?'), this)
            delete this.memory._move
        }
    }

    let distToDest = this.pos.getRangeTo(this.target)
    let reuseTil = distToDest
    if (reuseTil > 5) {
        if (reuseTil > 100) {
            reuseTil *= 0.25
        } else {
            reuseTil *= 0.5
        }
    }

    if (this.memory.Navigation === undefined) {
        this.memory.Navigation = {
            stuckFor: 0,
            lastPosition: { x: this.pos.x, y: this.pos.y }
        }
    }

    let creepNav = this.memory.Navigation
    if (!creepNav.lastPosition) {
        creepNav.lastPosition = { x: this.pos.x, y: this.pos.y }
    }

    if (creepNav.lastPosition.x === undefined || creepNav.lastPosition.y === undefined) {
        creepNav.lastPosition = { x: this.pos.x, y: this.pos.y }
    }

    let lastPositionLocation = this.room.getPositionAt(creepNav.lastPosition.x, creepNav.lastPosition.y)
    let hasNotMovedFromLast = this.pos.getRangeTo(lastPositionLocation) == 0
    if (hasNotMovedFromLast) {
        creepNav.stuckFor += 1
    } else {
        creepNav.stuckFor = 0
    }

    if (creepNav.stuckFor > 3) {
        delete this.memory._move
        creepNav.stuckFor = 0
    }

    response.errCode = this.moveTo(this.target, { reusePath: reuseTil })
    if (!response.errCode) {
        // if (this.memory.role === 'remoteTransport') {
        //     console.log(JSON.stringify(this.memory._move))
        // }
        creepNav.lastPosition = { x: this.pos.x, y: this.pos.y }
    }
    return response

    if (creepNav.stuckFor > 2) {
        // console.log(JSON.stringify('using good ole.'), this)
        avoidCreeps = true
        creepNav.stuckFor = 0
        creepNav.reusePathTil = 0
        response.errCode = this.moveTo(this.target)
        return response
    }

    if (Game.time < creepNav.reusePathTil && !this.path && creepNav.serializedPath) {
        try {
            // console.log(this.memory.serializedPath, this)
            this.path = Room.deserializePath(creepNav.serializedPath)
        } catch (e) {
            console.log(JSON.stringify(e), this)
            response.errCode = 888
            return response
        }
    }

    if (this.path) {
        var idx = _.findIndex(this.path, {
            x: this.pos.x,
            y: this.pos.y
        });

        if (idx != -1) {
            this.path.splice(0, idx + 1);
        }

        if (this.path.length == 0) {
            response.errCode = OK;
            return response
        }

        if (this.id === '57c1c5f150ba39ec272443c4') {
            console.log(JSON.stringify(this.path))
        }

        response.errCode = this.moveByPath(this.path);
        if (response.errCode == OK) {
            return response
        } else if (response.errCode < 0) {
            let firstNode = _.first(this.path.sort((d, d2) => this.pos.getRangeTo(d) - this.pos.getRangeTo(d2)))
            let targetLocation = this.room.getPositionAt(firstNode.x, firstNode.y)
            this.moveTo(targetLocation)
            return response
        }
    } else {

        let range = 0

        if (!this.target) {
            return
        }

        if (this.target.structureType) {
            if (this.target.structureType !== STRUCTURE_CONTAINER && (this.target.structureType !== STRUCTURE_RAMPART)) {
                range = 1
            }
        } else if (this.target.ticksToRegeneration) {
            range = 1
        } else if (this.target.ticksToLive) {
            range = 1
        }

        let dist = this.pos.getRangeTo(this.target)
        if (dist <= range) {
            return response
        }

        let navigationResponse = Navigation.getPathTo(this, this.target, range, avoidCreeps)

        if (this.id === '57c1c5f150ba39ec272443c4') {
            console.log('a', JSON.stringify(navigationResponse))
        }

        let serializedPath = Navigation.generatePathString(this, this.target, navigationResponse.path)
        if (serializedPath) {
            let movementsToDest = serializedPath.length - 4
            let reuseTil = movementsToDest
            if (movementsToDest > 100) {
                reuseTil *= 0.25
            } else {
                reuseTil *= 0.5
            }
            creepNav.reusePathTil = Game.time + reuseTil
            creepNav.serializedPath = serializedPath
        }

        let posToMove = _.first(navigationResponse.path)
        if (!posToMove) {
            response.errCode = ERR_INVALID_TARGET
            return response
        }

        let directionToMove = this.pos.getDirectionTo(posToMove)
        response.errCode = this.move(directionToMove)
        if (response.errCode !== ERR_TIRED) {
            creepNav.lastPosition = { x: posToMove.x, y: posToMove.y }
        }
    }

    return response
}
