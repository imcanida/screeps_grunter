
// Weighted sort..
var sortFunc = function(structure_one, structure_two) {
        var assignWeightTo = [structure_one, structure_two];
        var result = [];
        for(i = 0; i < assignWeightTo.length; i++) {
            var structure = assignWeightTo[i];
            var weight = 0;
            switch(structure.structureType) {
                case STRUCTURE_EXTENSION:
                weight = 4;
                break;
                case STRUCTURE_SPAWN:
                weight = 3;
                break;
                case STRUCTURE_CONTAINER:
                weight = 2;
                break;
                case STRUCTURE_TOWER:
                weight = 1;
                break;
            }
            result.push(weight);
        }
        return result[0] + result[1];
    };