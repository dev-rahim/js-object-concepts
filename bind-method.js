const student = {
    name: 'kibria',
    balance: 5000,
    treatDay: function (expance) {
        this.balance = this.balance - expance;
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
// const kibriaBalance = student.treatDay(1000);
// console.log(kibriaBalance);
const fatimaTreatday = student.treatDay.bind(student2);
// console.log(fatimaTreatday);
fatimaTreatday(5000);
const UnetraBlance = student.treatDay.bind(Unetra);
UnetraBlance(5000);