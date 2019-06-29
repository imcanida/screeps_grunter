Creep.prototype.fillTarget = function(resourceType) {
    let response = {
        delayed: false,
        actionOccured: false,
        errCode: 0,
        target: this.target
    }

    if (response.target) {
        if (response.target.structureType === STRUCTURE_STORAGE || response.target.structureType === STRUCTURE_CONTAINER 
            || response.target.structureType === STRUCTURE_LAB || response.target.structureType === STRUCTURE_TERMINAL) {
            if (resourceType) {
                response.errCode = this.transfer(response.target, resourceType)
            } else {
                for (var resourceType in this.carry) {
                    response.errCode = this.transfer(response.target, resourceType);
                }
            }
        } else {
            // Extensions / Spawn / Tower..
            response.errCode = this.transfer(response.target, RESOURCE_ENERGY)
        }

        if (!response.erroCode) {
            response.actionOccured = true
        }
    }
    return response
}
