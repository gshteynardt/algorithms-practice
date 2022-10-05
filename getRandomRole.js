const initRoles = ['мафия', 'доктор', 'детектив', 'мирный житель', 'мирный житель'];

const getRandomIndex = (length, start) => {
  return Math.floor(Math.random() * (length - start)) + start;
};

class Random {
  constructor() {
    this._randomIndex;
    this._length = 0;
    this._count = 0;
  }

  #getIndex() {
    return getRandomIndex(this._length, 0);
  }

  choise(arr) {
    this._length = arr.length - 1;
    this._randomIndex = this.#getIndex();
    this._count++;

    return arr[this._randomIndex];
  }
}

const random = new Random();

const randomizeRole = (initRoles) => {
  const roles = initRoles.slice();

  return () => {
    let role = random.choise(roles);
    const index = roles.indexOf(role);

    let temp = roles[index];
    roles[index] = roles[roles.length - 1];
    roles[roles.length - 1] = temp;
    roles.pop();
  
    return role;
  }
};

const getRole = randomizeRole(initRoles);

const getRolesValues = (initRoles) => {
  const roles = initRoles.slice();
  const result = [];

  for (let i = 0; i < roles.length; i++) {
    const index = getRandomIndex(roles.length - 1, i);

    const temp = roles[index];
    roles[index] = roles[i];
    roles[i] = temp;

    result.push(temp);
  }

  return result;
};

console.log(getRolesValues(initRoles));

