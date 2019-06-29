var Roles = require('game.roles');
var Common_Queries = {
    getEnergyDeposit: function(room) {

        if(room.memory.SpawnDeposits === undefined) {
            room.memory.SpawnDeposits = {
                deposits: [],
                validTil: Game.time - 1
            }
        }

        let spawnDeposists = room.memory.SpawnDeposits
        if (Game.time < spawnDeposists.validTil) {
            let depositsFromCache = []
            for(let depositId in spawnDeposists.deposits) {
                let depoHash = spawnDeposists.deposits[depositId]
                let depo = Game.getObjectById(depoHash)
                depositsFromCache.push(depo)
            }
            return depositsFromCache
        }

        var deposits = room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType === STRUCTURE_EXTENSION ||
                    structure.structureType === STRUCTURE_SPAWN && structure.energy < structure.energyCapacity)
            },
        });

        spawnDeposists.deposits = deposits.map((d) => d.id)
        spawnDeposists.validTil = Game.time + 1
        return deposits
    },
    getNearestBuildable: function(room, entity) {
        return room.find(FIND_CONSTRUCTION_SITES).sort((t, t2) => entity.pos.getRangeTo(t) - entity.pos.getRangeTo(t2))
    },
    getTowerDeposit: function(room) {
        var targets = room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType === STRUCTURE_TOWER) &&
                    (structure.store < structure.storeCapacity || structure.energy < structure.energyCapacity) ||
                    (structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] < structure.Capacity)
            },
        });
        return targets
    },
    getNearestAlly: function(creep, role) {
        var allyUnitOfType = _.filter(Game.creeps, (creep) => creep.memory.role == role)
        var closest = creep.pos.findClosestByRange(allyUnitOfType)
        return closest;
    },
    getNearestAllyInRange: function(creep, role, range) {
        var allyUnitOfType = _.filter(Game.creeps, (creep) => creep.memory.role == role)
        var closest = creep.pos.findClosestByRange(allyUnitOfType)
        return closest;
    }
}
module.exports = Common_Queries;

RoomPosition.prototype.findEnemiesInAttackRange = function(opts) {
    return this.findInRange(FIND_HOSTILE_CREEPS, 3, opts)
};
