const computer = { color: 'red', ram: '8GB', harddisk: '1TB', isNormal: true };
// getting all keys of a objects
const keysOfComputer = Object.keys(computer);
// getting all valus of a objects
const valusOfComputer = Object.values(computer);
// getting all key and valus or pair of a objects
const pairOfComputer = Object.entries(computer);
// freeze a property
Object.freeze(computer);
// seal a property
Object.seal(computer);
delete computer.isNormal;
computer.isNormal = false;
console.log(computer);