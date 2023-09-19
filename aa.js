// findMin
const findMin = (...args) => {
  Math.min(...args);
};

// mergeObjects
const mergeObjects = (ojb1, obj2) => ({ ...ojb1, ...obj2 });

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((val) => val * 2),
];

// Slice and Dice
const removeRandom = (items) => {
  const idx = Math.floor(Math.random() * items.length);
  items.splice(idx, 1);

  return [...items];
};

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
};

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const update = (obj1, key, val) => {
  return { ...obj1, [key]: val };
};
