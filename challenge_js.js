
let rover = {
	direction: 'N',
  x: 0,
  y: 0,
  travelLog: [0,0] 
};

const map = [
    [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 1, 0, 0, 1, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
];



function turnLeft(rover){
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

const error = "Achtung! The rover is not allowed to leave the map";

function moveForward(rover){
  switch(rover.direction) {
    case 'N':
      if (rover.y === 0) {
        console.log(error);
      } else {
        rover.y--
        }
      break;
    case 'E':
      if (rover.x === map.length-1) {
        console.log(error);
      } else {
        rover.x++
        }
      break;
    case 'S':
      if (rover.y === map.length-1) {
        console.log(error);
      } else {
        rover.y++
      }
      break;
    case 'W':
      if (rover.x === 0) {
        console.log(error);
      }
      rover.x--
      break;
  };
    rover.travelLog.push([rover.x,rover.y]);
    console.log(`${rover.x},${rover.y}`);
}

function moveBackward(rover){
  switch(rover.direction) {
    case 'N':
      if (rover.y === map.length-1) {
        console.log(error);
      } else {
        rover.y++
        }
      break;
    case 'E':
      if (rover.x === 0) {
        console.log(error);
      } else {
        rover.x--
        }
      break;
    case 'S':
      if (rover.y === 0) {
      console.log(error);
    } else {
      rover.y--
      }
      break;
    case 'W':
      if (rover.x === map.length-1) {
        console.log(error);
      } else {
        rover.x++
        }
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
      case 'b':
      moveBackward(rover);
      break;
      default:
      console.log(`${i} isn't valid. Choose one of the following commands: (r)ight, (l)eft, (f)orward and (b)ackward"`)
    }
  }
}

let str = "rffrfflfrff";

function entireTracking(rover) {
  console.log(`All the movements made by Rover are ${rover.travelLog}`);
}
