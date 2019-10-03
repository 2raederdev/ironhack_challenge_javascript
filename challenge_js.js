// Create an object to represent the rover. This object will have only one property for now: the direction.The rover's default direction will be "N" (as North).

let rover = {
	direction: 'N',
  x: 0,
  y: 0,
  travelLog: [0,0],
  name: 'A'
  
};

let roverDos = {
	direction: 'S',
  x: 2,
  y: 2,
  travelLog: [2, 2],
  name: 'B'
};

let str = "rffrfflfrff";

const error = "Achtung! This move is not allowed";

let map = [
    [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
];

//Turning the Rover to the left

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

//Turning the Rover to the right

function turnRight(rover){
   switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  };
    console.log("Rover Direction: " + rover.direction);
}


function moveForward(rover){
  switch(rover.direction) {
    case 'N':
      if (rover.y === 0 && map[x][y] !== 0) {
        console.log(error);
      } else {
        rover.y--
        }
      break;
    case 'E':
      if (rover.x === map.length-1 && map[x][y] !== 0) {
        console.log(error);
      } else {
        rover.x++
        }
      break;
    case 'S':
      if (rover.y === map.length-1 && map[x][y] !== 0) {
        console.log(error);
      } else {
        rover.y++
      }
      break;
    case 'W':
      if (rover.x === 0 && map[x][y] !== 0) {
        console.log(error);
      }
      rover.x--
      break;
  };
    rover.travelLog.push([rover.x,rover.y]);
    console.log(`The new position of the rover is x:${rover.x},y=${rover.y}.`);
}

function moveBackward(rover){
  switch(rover.direction) {
    case 'N':
      if (rover.y === map.length-1 && map[x][y] !== 0) {
        console.log(error);
      } else {
        rover.y++
        }
      break;
    case 'E':
      if (rover.x === 0 && map[x][y] !== 0) {
        console.log(error);
      } else {
        rover.x--
        }
      break;
    case 'S':
      if (rover.y === 0 && map[x][y] !== 0) {
      console.log(error);
    } else {
      rover.y--
      }
      break;
    case 'W':
      if (rover.x === map.length-1 && map[x][y] !== 0) {
        console.log(error);
      } else {
        rover.x++
        }
      break;
  };
    rover.travelLog.push([rover.x,rover.y]);
    console.log(`The new position of the rover is x:${rover.x},y=${rover.y}.`);
}

function roverPossibleCommands(commands) {
  let move = Array.from(commands)
  
  for (let i = 0 ; i < move.length ; i++) {
    switch(move[i]) {
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

function entireTracking(roverDos) {
  console.log(`All the movements made by Rover are ${rover.travelLog}`);
}

roverPossibleCommands(str);
