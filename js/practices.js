const bank = {
    name: 'ridwan',
    salary: 50000,
    job: true,
    details: {
        city: 'narayanganj',
        home: 'bandar',
        roadNo: 3454,
    },
    familyDetails: ['jaman', 'selena', 'rahima', 'shamsul alam', 'saila'],
    totalCost: function(cost) {
        this.salary = this.salary - cost;
        console.log(this.salary);
        return this.salary;
    }
}

const money = bank.totalCost(500);
console.log(money);
const hodai = Object.keys(bank);
console.log(hodai);

//3.1
const output = () => 7;
const single = output();
console.log(single);
//3.2
const divide = sum => sum * 7;
const resultD = divide(10);
console.log(resultD);
//3.3
const twoP = (sum, diff) => {
    const add = sum + diff;
    const result = add / 2;
    return result;
}
const total = twoP(10, 10);
console.log(total);