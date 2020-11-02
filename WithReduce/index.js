arr = [1, 2, 3, 4, 5, 6, 7];

//==========MAP=========================================

const map = (arr, fn) => {
  return arr.reduce((acc, curent) => [...acc, fn(curent)], []);
};

console.log(map(arr, (curent) => curent * 2));

// ========FILTER=======================================

const filter = (arr, fn) => {
  return arr.reduce((acc, elem) => {
    if (fn(elem)) {
      return [...acc, elem];
    }
    return [...acc];
  }, []);
};

console.log(filter(arr, (elem) => elem > 3));

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
