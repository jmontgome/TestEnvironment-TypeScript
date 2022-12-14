export class Car {
    make: string;
    model: string;    

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    Start() {
        return "Brr Brr Brr Brr Rumm";
    }
}

export class Corvette extends Car {
    toString() {
        return this.make;
    }

    Run() {
        return "RuuuuuuUUUUUUUUUUHHHH";
    }
}