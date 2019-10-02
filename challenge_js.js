
let rover = {
	direction: 'N',
  x: 0,
  y: 0,
  travelLog: [0,0] 
};


function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  };
  console.log("Rover Direction: " + rover.direction);
}

turnLeft(rover);


function turnRight(rover){
   console.log("turnRight was called!");
   switch(rover.direction) {
    case 'N':
      jeeprover.direction = 'E';
      break;
    case 'E':
      jeeprover.direction = 'S';
      break;
    case 'S':
      jeeprover.direction = 'W';
      break;
    case 'W':
      jeeprover.direction = 'N';
      break;
  };
    console.log("Rover Direction: " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  switch(rover.direction) {
    case 'N':
      rover.y--
      break;
    case 'E':
      rover.x++
      break;
    case 'S':
      rover.y++
      break;
    case 'W':
      rover.x--
      break;
  };
    rover.travelLog.push([rover.x,rover.y]);
    console.log(`${rover.x},${rover.y}`);
}

function roverPossibleCommands(commands) {
  let move = Array.from(commands)
  
  for (let i = 0 ; i < commands.length ; i++) {
    switch(rover.direction) {
      case 'f':
        moveForward(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
    }
  }
}

function entireTracking(rover) {
  console.log(`All the movements made by Rover are ${rover.travelLog}`);
}