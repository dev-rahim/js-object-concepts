// 1.USING OBJECT LITARAL
const student = { name: 'rahim' };
// 2.  CONSTRUCTOR 
const person = new Object();
// 3. WITH OBJECT CREATE KEYWORD
const human = Object.create(student);
// console.log(human.name);
// 4. USING CLASS CREAT  OBJECT 
class People {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
}
const userDetails = new People('Rahim', 526);
// console.log(userDetails.name, userDetails.roll);

// 5.WITH THE USE OF FUNCTION 
function Manus(name, id) {
    this.name = name;
    this.id = id;
};

const detailsManus = new Manus('Abdullah', 2500);
// console.log(detailsManus.name);

// 1.USING OBJECT LITARAL
const studentOf2020 = {
    id: '1253',
    name: 'Rahim',
    resuts: [
        { class5: '4.53' },
        { class8: '4.38' },
        { class10: '4.68' },
    ],
};
// console.log(studentOf2020.resuts[2]);

// 2.  CONSTRUCTOR
const myFriends = new Object({
    name: ['rahim', 'karim', 'anisha', 'sakibul'],
    roll: '127219',
})
console.log();
// 3. WITH OBJECT CREATE KEYWORD

// 4. USING CLASS CREAT  OBJECT

// 5.WITH THE USE OF FUNCTION 