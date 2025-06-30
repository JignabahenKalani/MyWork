var car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  getPrice: function () {

    return 20000;
  },
};

var price = car.getPrice(); // 20000
car.model=" corolla";
car.this.year=2021;

console.log(price);
