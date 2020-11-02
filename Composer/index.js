const compose = (...funcs) => (arg) =>
  funcs.reduceRight((acc, funk) => funk(acc), arg);

const data = (arg) => arg * 2;
const data2 = (arg) => arg + 9;
const data3 = (arg) => arg - 3;

const useCompose = compose(data, data2, data3);

console.log(useCompose(5));
