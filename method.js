const student = {
    id: 101,
    name: 'kibria',
    balance: 5000,
    isRich: false,
    major: 'Math',
    subjects: ['english', 'economy'],
    bestFriend: {
        name: 'kundu',
        major: 'math',
    },
    takeExam: function () {
        console.log(this.name, ' taking Exam');
    },
    treatDay: function (expance) {
        this.balance = this.balance - expance;
        return this.balance;
    }
}
student.takeExam();
const remaining = student.treatDay(900);
const remaining1 = student.treatDay(500);
console.log('money after giving treate', remaining1);