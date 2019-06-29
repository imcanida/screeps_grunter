Creep.prototype.pullContainer = function() {
    
    //TODO: Cache These Ressults.. Update less frequently.. (cold check level as well)
    var containers = this.room.find(FIND_STRUCTURES, {
        filter: (structure) => (structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > (structure.storeCapacity * 0.0)),
    });
    if (containers.length > 0) {
        let container = _.first(containers.sort((t1, t2) => this.pos.getRangeTo(t1.pos) > this.pos.getRangeTo(t2.pos)))
        let errCode = this.withdraw(container, RESOURCE_ENERGY)
        if (!errCode) {
            return true
        }
    }
    return false
}