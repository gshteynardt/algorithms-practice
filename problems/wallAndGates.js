
const wallsAndGates = (rooms) => {
  const [row, col] = [rooms.length, rooms[0].length];

  const direction = [
    [1, 0], //top
    [0, 1], //right
    [-1, 0], //bottom
    [0, -1] //left
  ];

  const queue = [];

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  while(queue.length) {
    const [x, y] = queue.shift();

    for(let dir of direction) {
      const [toX, toY] = [dir[0] + x, dir[1] + y];

      if(toX >= row || toY >= col || toX < 0 || toY < 0 || rooms[toX][toY] !== 2147483647) {
        continue;
      }

      rooms[toX][toY] = rooms[x][y] + 1;
      queue.push([toX, toY]);
    }
  }

  return rooms;
};

const rooms = [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647],
];

console.log(wallsAndGates(rooms));