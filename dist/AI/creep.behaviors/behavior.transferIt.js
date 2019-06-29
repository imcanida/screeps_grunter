Creep.prototype.transferIt = function() {
    let response = {
        delayed: false,
        actionOccured: false,
        errCode: 0,
        //target.. anything else?
    }

    response.target = this.target
    response.errCode = this.transfer(this.target, RESOURCE_ENERGY)
    if(!response.errCode) {
        response.actionOccured = true
    }
    return response
}