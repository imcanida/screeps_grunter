var Common = require('game.common')

// Extension of Creep.
Creep.prototype.buildIt = function() {
     let response = {
        delayed: false,
        actionOccured: false,
        errCode: 0,
        target: this.target
        //target.. anything else?
    }
    
    if (response.target) {
        response.errCode = this.build(response.target)
        if (!response.errCode) {
            response.actionOccured = true
        }
    }
    return response
}