arr = [1, 2, 3, 4, 5, 6, 7];

//==========MAP=========================================

const map = arr.reduce((acc, curent) => {
  acc.push(curent * 2);
  return acc;
}, []);

console.log(map);

// ========FILTER=======================================

const filter = arr.reduce((acc, curent) => {
  if (curent > 3) {
    acc.push(curent);
  }
  return acc;
}, []);

console.log(filter);

//==========FIND=======================================

const find = (arr, fn) => {
  return arr.reduce((acc, elem) => {
    if (fn(elem)) {
      return [...acc, elem];
    }
    return [...acc];
  }, [])[0];
};

console.log(find(arr, (elem) => elem === 3));

//========SOME========================================

const some = (arr, fn) => {
  return arr.reduce((acc, elem) => [...acc, fn(elem)], []).includes(true);
};

console.log(some(arr, (elem) => elem < 3));

//===========EVERY======================================

const every = (arr, fn) => {
  return !arr.reduce((acc, elem) => [...acc, fn(elem)], []).includes(false);
};

console.log(every(arr, (elem) => elem < 3));
