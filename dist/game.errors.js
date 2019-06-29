var gameErrors = {
    logErr: function(errorCode) {
        var msg = '';
        switch (errorCode) {
            case -1:
                msg = 'err:Your not the owner..';
                break;
            case -2:
                msg = 'err:No path';
                break;
            case -3:
                msg = 'err:Name already exists..';
                break;
            case -4:
                msg = 'err:Busy..';
                break;
            case -5:
                msg = 'err:Not found..';
                break;
            case -6:
                msg = 'err:Not enough energy or resources or extensions..';
                break;
            case -7:
                msg = 'err:Invalid target..';
                break;
            case -8:
                msg = 'err:Full..';
                break;
            case -9:
                msg = 'err:Not in range..';
                break;
            case -10:
                msg = 'err:Invalid Args..';
                break;
            case -11:
                msg = 'err:Tired..';
                break;
            case -12:
                msg = 'err:No body part..';
                break;
            case -14:
                msg = 'err:RLC not enough..';
                break;
            case -15:
                msg = 'err:GLC not enough..';
                break;
        }
        console.log(JSON.stringify(msg))
        return msg;
    }
}

module.exports = gameErrors;
// var Errors = require('game.errors');