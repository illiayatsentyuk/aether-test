interface Shape {
    area(): number;
}

class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    
    area(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    private radius: number;

    constructor(radius: number){
        this.radius = radius;
    }
    
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const shapes: Shape[] = [new Rectangle(10, 20), new Circle(10)];
shapes.forEach(shape => {
    console.log(shape.area());
});