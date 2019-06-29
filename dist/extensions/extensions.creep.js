// Just adding in a bunch of Extensions to Creep.
// Usage in code can be like creep.gather(target), creep.moveIt(target), etc.

require('behavior.moveIt')
require('behavior.gather')
require('behavior.pullFromContainer')
require('behavior.pullFromStorage')
require('behavior.mine')
require('behavior.dropIt')
require('behavior.fillTarget')
require('behavior.buildIt')
require('behavior.upgradeIt')
require('behavior.fillIt') // may not be needed.

require('behavior.transferToAlly')
require('behavior.transferIt')

///********************************************************************************************************************
/// Not IMPLEMENTED
require('behavior.repairIt')
require('behavior.dedicateMine')
require('behavior.exitRoom')