Creep.prototype.pullStorage = function(resourceType) {
    let response = {
        delayed: false,
        actionOccured: false,
        errCode: 0,
        //target.. anything else?
    }

    if(!this.room.storage) {
        console.log(JSON.stringify("No storage exists in this room.."))
        response.errCode = 2
        return
    }

    if(!resourceType) {
        resourceType = RESOURCE_ENERGY
    }

    response.target = this.room.storage
    response.errCode = this.withdraw(response.target, resourceType)
    if(!response.errCode) {
        response.actionOccured = true
    }

    return response
}
