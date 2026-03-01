interface Prystriy {
    turnOn(): void;
    turnOff(): void;
}

class Prystriy implements Prystriy {
    constructor(private name: string, private isPowerd: boolean) {
        this.name = name;
        this.isPowerd = isPowerd;
    }

    turnOn(): void {
        this.isPowerd = true;
        console.log(`${this.name} turned on`);
    }
    turnOff(): void {
        this.isPowerd = false;
        console.log(`${this.name} turned off`);
    }

    getIsPowerd(): boolean {
        return this.isPowerd;
    }
}

class Buzzer extends Prystriy {
    constructor(name: string, isPowerd: boolean) {
        super(name, isPowerd);
    }
}

class Light extends Prystriy {
    constructor(name: string, isPowerd: boolean) {
        super(name, isPowerd);
    }
}

const buzzer = new Buzzer("Buzzer", false);
const light = new Light("Light", false);

const array = [buzzer, light];
array.forEach(item => {
    item.turnOn();
    console.log(item.getIsPowerd());
    item.turnOff();
    console.log(item.getIsPowerd());
});