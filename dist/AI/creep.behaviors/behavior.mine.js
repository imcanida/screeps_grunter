Creep.prototype.mine = function() {
    let response = {
        delayed: false,
        actionOccured: false,
        errCode: 0,
        //target.. anything else?
    }
    response.target = this.SourceManager.needSite(this)
    response.errCode = this.harvest(response.target)
    if (!response.errCode) {
        response.actionOccured = true
    } else if(response.errCode < 0) {
        this.moveTo(response.target)
    }

    return response
}
