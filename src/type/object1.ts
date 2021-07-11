type Type1 = {
  s1: string,
  n1: number,
};

const o1: Type1  = { n1: 0, s1: "" };

const o2 = {
  n1: 0,
  s1: '',
  e1: '',
};

const o3: Type1 = o2;
console.log(o3);

