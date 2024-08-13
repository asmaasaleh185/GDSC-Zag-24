class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
    this.msg = function () {
      return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
    };
  }
  run() {
    return "Car Is Running Now";
  }
  stop() {
    return "Car Is Stopped";
  }
}

let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("Toyota", "2023", 500000);
let carThree = new Car("BMW", "2021", 750000);

console.log(carOne.msg());
console.log(carOne.run());

// Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");
