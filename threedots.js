const ages = [12, 14, 16, 13, 17];
const ages2 = [ 16, 15, 17];
const ages3 = [27, 25, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages,...ages2,5,...ages3];

// console.log(allAges2);
const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];

const maximum = Math.max(...takaPoisa);
console.log(maximum);