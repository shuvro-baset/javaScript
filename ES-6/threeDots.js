const ages = [12,14,15,16,25];
const ages2 = [21,14,25,23];
const ages3 = [25,28,27,28];

const allAge = ages.concat(ages2).concat([12,20]).concat(ages3);
// console.log(allAge);


const allAge2 = [ages, ages2, ages3];
// console.log(allAge2);
// spread operator
const allAge3 = [...ages, ...ages2, ...ages3]
console.log(allAge3);


const a = 120;
const b = 100;
const c = 175;
// const maximum = Math.max(a,b,c);
// console.log(maximum);

const takaPoisa = [650,420,123]
const maximum = Math.max(...takaPoisa)
console.log(maximum);