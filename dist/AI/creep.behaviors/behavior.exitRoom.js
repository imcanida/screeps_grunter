Creep.prototype.exitRoom = function(direction) {
    let toExitPosition = this.room.getExitPosition(direction)
    
}


//var exits = Game.map.describeExits('W8N3');
// {
//     "1": "W8N4",    // TOP
//     "3": "W7N3",    // RIGHT
// 	"5": "W8N2",    // BOTTOM
// 	"7": "W9N3"     // LEFT
// }
//
// let from = new RoomPosition(25, 25, 'E1N1');
// let to = new RoomPosition(25, 25, 'E4N1');

// // Use `findRoute` to calculate a high-level plan for this path, 
// // prioritizing highways and owned rooms
// let allowedRooms = { [ from.roomName ]: true };
// Game.map.findRoute(from.roomName, to.roomName, {
// 	routeCallback(roomName) {
// 		let parsed = /^[WE]([0-9]+)[NS]([0-9]+)$/.exec(roomName);
// 		let isHighway = (parsed[1] % 10 === 0) || (parsed[2] % 10 === 0);
// 		let isMyRoom = Game.rooms[roomName] && 
// 			Game.rooms[roomName].controller && 
// 			Game.rooms[roomName].controller.my;
// 		if (isHighway || isMyRoom) {
// 			return 1;
// 		} else {
// 			return 2.5;
// 		}
// 	}
// }).forEach(function(info) {
// 	allowedRooms[info.room] = true;
// });

// // Invoke PathFinder, allowing access only to rooms from `findRoute`
// let ret = PathFinder.search(from, to, {
// 	roomCallback(roomName) {
// 		if (allowedRooms[roomName] === undefined) {
// 			return false;
// 		}
// 	}
// });

//console.log(ret.path);


// Example:
// if(creep.room != anotherRoomName) {
//     var exitDir = Game.map.findExit(creep.room, anotherRoomName);
//     var exit = creep.pos.findClosestByRange(exitDir);
//     creep.moveTo(exit);
// }
// else {
//     // go to some place in another room
// }