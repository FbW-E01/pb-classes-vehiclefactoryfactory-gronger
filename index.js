function factoryFactory(type) {
    return function Factory(make, model) {
        this.type = type;
        this.make = make;
        this.model = model;    
    }
}




const BikeFact = factoryFactory("bicycle");

let bicycle = new BikeFact("Snake", "fjWJD4");

console.log(bicycle);

const CarFact = factoryFactory("car");

let car = new CarFact("Mitsubishi", "FJd743");

const BoatFact = factoryFactory("boat");

let boat = new BoatFact("Blobbers", "444jdjwosl");

const BlimpFact = factoryFactory("Blimp");

let blimp = new BlimpFact("Rodgers", "KF712");

const TrainFact = factoryFactory("Train");

let train = new TrainFact("Deutsche Bahn", "DB13");

console.log("-----------------------------------------------------");

const vehicles = [];

vehicles.push(bicycle, car, boat, blimp, train);

console.log(vehicles);

console.log("...................................................................");


for (let i = 0; i < vehicles.length; i++) {
    console.log(vehicles[i]);
}


// console.log(printVehicles(vehicles));

console.log(typeof TrainFact);
console.log(typeof train);

// The type of the train, car boat etc factories is: function

// the type of of the objects created by the factories is: object