class Bank{
    private amount: number;


    constructor(){
        this.amount = 0;
    }

    deposit(amount: number){
        if (amount > 0) {
            this.amount += amount;
        } else {
            console.log("Amount must be greater than 0");
        }
    }

    withdraw(amount: number){
        if (amount > 0) {
            this.amount -= amount;
        } else {
            console.log("Amount must be greater than 0");
        }
    }

    getBalance(){
        return this.amount;
    }
}

const bank = new Bank();
bank.deposit(100);
bank.withdraw(50);
console.log(bank.getBalance());