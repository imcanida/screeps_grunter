var Common = require('game.common')

Creep.prototype.fillIt = function(resourceType) {
    let response = {
        delayed: false,
        actionOccured: false,
        errCode: 0,
        //target.. anything else?
    }
    response.targets = Common.getEnergyDeposit(this.room)
        .filter((d) => d.energy < d.energyCapacity)
        .sort((d, d2) => this.pos.getRangeTo(d) - this.pos.getRangeTo(d2))

    // console.log(response.targets)
    response.target = _.first(response.targets)

    if (response.target) {
        let errCode = 0
        if (response.target.structureType === STRUCTURE_STORAGE || response.target.structureType === STRUCTURE_CONTAINER) {
            if (resourceType) {
                errCode = this.transfer(response.target, resourceType)
            } else {
                for (var resourceType in this.carry) {
                    errCode = this.transfer(response.target, resourceType);
                }
            }
        } else {
            // Extensions / Spawn
            errCode = this.transfer(response.target, RESOURCE_ENERGY)
        }
        if (!errCode) {
            response.actionOccured = true
        }
        response.errCode = errCode
    }
    return response
}
