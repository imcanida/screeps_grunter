Creep.prototype.upgradeIt = function() {
	let response = {
        delayed: false,
        actionOccured: false,
        errCode: 0,
        //target.. anything else?
    }
    response.errCode = this.upgradeController(this.room.controller)
    if(!response.errCode) {
    	response.actionOccured = true
    }
    return response
}