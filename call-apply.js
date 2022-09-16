const student = {
    name: 'kibria',
    balance: 5000,
    treatDay: function (expance, boksish) {
        this.balance = this.balance - expance - boksish;
        console.log('here', this);
        return this.balance;
    }
}
const student2 = {
    name: 'Fatima',
    balance: 10000,

}
const Unetra = {
    name: 'Unetra',
    balance: 8200,

}
// call 
// student.treatDay.call(student2, 500);
// student.treatDay.call(Unetra, 5000, 200);

// apply 
// student.treatDay.apply(Unetra, [1000, 200]);

// bind 
const unetraBalance = student.treatDay.bind(Unetra);
unetraBalance(1000, 200);