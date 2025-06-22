var car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  getPrice: function () {
    return 20000;
  },
};

var price = car.getPrice(); // 20000
console.log(price);
