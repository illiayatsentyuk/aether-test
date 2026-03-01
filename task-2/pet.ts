class Pet {
    private name: string;
    private age: number;
    private type: string;

    constructor(name: string, age: number, type: string){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getType(){
        return this.type;
    }
}

class Dog extends Pet {
    private breed: string;

    constructor(name: string, age: number, breed: string){
        super(name, age, "Dog");
        this.breed = breed;
    }

    getBreed(){
        return this.breed;
    }

    bark(){
        console.log("Woof!");
    }
}

const dog = new Dog("Buddy", 3, "Golden Retriever");
