var floodFill = function (image, sr, sc, color) {
  const directions = [
    [-1, 0], //top
    [0, 1], //right
    [1, 0], //bottom
    [0, -1], //left
  ];

  const [row, col] = [image.length, image[0].length];

  const queue = [[sr, sc]];

  const fillNeighbors = (queue, oldColor, newColor) => {
    const isValid = (toX, toY) => {
      return toX < row
        && toY < col
        && toX >= 0
        && toY >= 0
        && image[toX][toY] === oldColor 
        && image[toX][toY] !== newColor
    };

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      image[x][y] = newColor;

      for (const dir of directions) {
        const [toX, toY] = [dir[0] + x, dir[1] + y];

        if (!isValid(toX, toY)) continue;

        queue.push([toX, toY]);
      }
    }
  };

  fillNeighbors(queue, image[sr][sc], color);

  return image;
};

const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
const sr = 1;
const sc = 1;
const color = 2;

floodFill(image, sr, sc, color);