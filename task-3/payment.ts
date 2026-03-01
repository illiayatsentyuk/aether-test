interface Payment {
    pay(amount: number): void;
}

class CreditCardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paying with credit card ${amount}`);
    }
}

class PayPalPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paying with PayPal ${amount}`);
    }
}

function processPayment(payment: Payment, amount: number): void {
    payment.pay(amount);
}