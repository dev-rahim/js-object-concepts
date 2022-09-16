const computer = { color: 'red', ram: '8GB', harddisk: '1TB', isNormal: true };
// using for in for lopping an object valu and keys 
for (const key in computer) {
    // console.log(key, '=', computer[key]);
}
// using for in for lopping an object valu and keys 
const keys = Object.keys(computer);
for (const prop of keys) {
    // console.log(prop, computer[prop]);
}

// advance 
const objecOfArray = Object.entries(computer);
for (const [keys, values] of objecOfArray) {
    console.log(keys, '=', values);
}
/*
for(le
    console.log(element);t i=0; i<0; i++){}
for (const iterator of object) {}
*/
