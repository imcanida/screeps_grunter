Creep.prototype.repairIt = function() {

    if (!this.memory.repairQueryIterator) this.memory.repairQueryIterator = 0
    let target
    if (this.memory.repairQueryIterator < 0 || !this.memory.repairTarget) {
        target = _.first(this.room.find(FIND_CONSTRUCTION_SITES).sort((t, t2) => this.pos.getRangeTo(t) - this.pos.getRangeTo(t2)))
        this.memory.repairTarget = target

        this.memory.repairQueryIterator = this.repairQueryDelay
    } else {
        target = this.memory.repairTarget
    }

    if (target) {
        if (this.repair(target) == ERR_NOT_IN_RANGE) {
            this.target = target
        } else {
            this.hasAction = false
        }
    }
}