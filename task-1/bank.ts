class Bank{
    private amount: number;


    constructor(){
        this.amount = 0;
    }

    deposit(amount: number){
        this.amount += amount;
    }

    withdraw(amount: number){
        this.amount -= amount;
    }

    getBalance(){
        return this.amount;
    }
}

const bank = new Bank();
bank.deposit(100);
bank.withdraw(50);
console.log(bank.getBalance());