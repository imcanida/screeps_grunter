var commonQueries = require('common.queries');
var Game_Common = {
	getEnergyDeposit: function(room) {
		return commonQueries.getEnergyDeposit(room);
	},
	getTowerDeposit: function(room) {
		return commonQueries.getTowerDeposit(room)
	},
	getNearestBuildable: function(room, entity) {
		return commonQueries.getNearestBuildable(room, entity)
	},
	getNearestAlly: function(creep, type) {
		return commonQueries.getNearestAlly(creep, type)
	}
}

module.exports = Game_Common;