const first = { a: 1, b: 2, c: 5 };
const second = { b: 2, a: 1, };
// premitive er noypme check kora jai na 
function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        console.log('Object are not Equal');
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
console.log(compareObjects(first, second));