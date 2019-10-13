/* 
I am sending a rover to Mars, and I need to be able to move it through a series of instructions sent from the Earth.
*/

let rover = {
	direction: 'N',
  x: 0,
  y: 0,
  travelLog: [0,0],
  name: 'A'
  };

/*
Let me introduce you rover, our research vehicle in Mars, which is located within a map, whose size is 10x10. The Rover is not allowed to run off of the map. As you can see, the map has a few obstacles (represented with the number 1 in the map) as well. Take care that the Rover doesn't run into an obstacle.
*/

let map = [
    [ 'A', 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 'B', 0, 0, 0, 0, 0, 0, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
];

// My Rover is "kind of dumb". By that, I mean it can't move and turn at the same time. This means that if the rover wants to move to the left, its first move must be a turn. Its next move will then be a step forward.

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

const errorMap = "Achtung! This move is not allowed as you are going outside the grid!";

const errorObs = "Achtung! This move is not allowed as there is an obstacle!";

const errorRov = "Achtung! This move is not allowed as there is another rover!";

function moveForward(rover){
  switch(rover.direction) {
    case 'N':
      if (rover.y === 0) {
        console.log(errorMap);
      } else if (map[(rover.y)-1][rover.x] === 1) {
        console.log(errorObs);
        } else if (typeof map[(rover.y)-1][rover.x] === 'string') {
        console.log(errorRov);
          } else {
            map[rover.y][rover.x] = 0;
            rover.y--;
            map[rover.y][rover.x] = "A";
            }
      break;
    case 'E':
      if (rover.x === map.length-1) {
        console.log(errorMap);
      } else if (map[rover.y][(rover.x)+1] === 1) {
        console.log(errorObs);
        } else if (typeof map[rover.y][(rover.x)+1] === 'string') {
        console.log(errorRov);
          } else {
            map[rover.y][rover.x] = 0;
            rover.x++;
            map[rover.y][rover.x] = "A";
            }
      break;
    case 'S':
      if (rover.y === map.length-1) {
        console.log(errorMap);
      } else if (map[(rover.y)+1][rover.x] === 1) {
        console.log(errorObs);
        } else if (typeof map[(rover.y)+1][rover.x] === 'string') {
        console.log(errorRov);
          } else {
            map[rover.y][rover.x] = 0;
            rover.y++;
            map[rover.y][rover.x] = "A";
            }
      break;
    case 'W':
      if (rover.x === 0) {
        console.log(errorMap);
      } else if (map[rover.y][(rover.x)-1] === 1) {
        console.log(errorObs);
        } else if (typeof map[rover.y][(rover.x)-1] === 'string') {
        console.log(errorRov);
          } else {
            map[rover.y][rover.x] = 0;
            rover.x--;
            map[rover.y][rover.x] = "A";
            }
      break;
  };
    rover.travelLog.push([rover.x,rover.y]);
    console.log(`The new position of the rover is x:${rover.x},y:${rover.y}.`);
}

function moveBackward(rover){
  switch(rover.direction) {
    case 'N':
      if (rover.y === map.length-1) {
        console.log(errorMap);
      } else if (map[(rover.y)+1][rover.x] === 1) {
        console.log(errorObs);
        } else if (typeof map[(rover.y)+1][rover.x] === 'string') {
        console.log(errorRov);
          } else {
            map[rover.y][rover.x] = 0;
            rover.y++;
            map[rover.y][rover.x] = "A";
            }
      break;
    case 'E':
      if (rover.x === 0) {
        console.log(errorMap);
      } else if (map[rover.y][(rover.x)-1] === 1) {
        console.log(errorObs);
        } else if (typeof map[rover.y][(rover.x)-1] === 'string') {
        console.log(errorRov);
          } else {
            map[rover.y][rover.x] = 0;
            rover.x--;
            map[rover.y][rover.x] = "A";
            }
      break;
    case 'S':
      if (rover.y === 0) {
      console.log(errorMap);
    } else if (map[(rover.y)-1][rover.x] === 1) {
        console.log(errorObs);
        } else if (typeof map[(rover.y)-1][rover.x] === 'string') {
        console.log(errorRov);
          } else {
            map[rover.y][rover.x] = 0;
            rover.y--;
            map[rover.y][rover.x] = "A";
            }
      break;
    case 'W':
      if (rover.x === map.length-1) {
        console.log(errorMap);
      } else if (map[rover.y][(rover.x)+1] === 1) {
        console.log(errorObs);
        } else if (typeof map[rover.y][(rover.x)+1] === 'string') {
        console.log(errorRov);
          } else {
            map[rover.y][rover.x] = 0;
            rover.x++;
            map[rover.y][rover.x] = "A";
            }
      break;
  };
    rover.travelLog.push([rover.x,rover.y]);
    console.log(`The new position of the rover is x:${rover.x},y:${rover.y}.`);
}

// Validate Inputs: I have to add validation so that the inputs must be f, b, r, or l.

function entireTracking(rover) {
  console.log("All the positions of rover have been " + rover.travelLog);
  console.log(map)
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
  
  console.log(entireTracking(rover));
}

// Do you want to play and move the Mars Rover? Call the function "play".


let str = prompt("Do you want to play and move the Mars Rover? Choose the route, entering commands in one line without spaces. Remember, the commands are: (r)ight, (l)eft, (f)orward and (b)ackward. You can enter as much commands as you want.")

function play() {
  console.log(`You have added the following commands "${str}"`)
  roverPossibleCommands(str)
};

play();

/* I had to add additional rovers, having them take turns moving. If one rover is going to run into the other, you should stop the rover and console.log a message saying so. Unfortuntely, I wasn't able to complete this part of the challenge.

let roverTwo = {
	direction: 'S',
  x: 2,
  y: 2,
  travelLog: [2, 2],
  name: 'B'
};

The following function is aimed to generate a random string with the same number of inputs as the inputs for the first Mars Rover.

function randomRover(length) {
   let roverDosCommands = '';
   let characters = 'bflr';
   for (let i = 0; i < length; i++ ) {
      roverDosCommands += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return roverDosCommands;
}

console.log(randomRover(str.length));

*/
