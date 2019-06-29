Creep.prototype.dropIt = function(resourceType) {
    if (resourceType) {
        this.drop(resourceType)
    } else {
        for (var resourceType in this.carry) {
            this.drop(resourceType);
        }
    }
}