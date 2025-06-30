// create your coffee object array here

var coffee={
    type:"latte",
    milkStatus: true,
    customer:" aman",

};

console.log(coffee.type);

var orders = [
  {
    type:"latte",
    milkStatus:true,
    customer:"aman",
  },
  {
    type:"flat white",
    milkStatus:false,
    customer:"harsh",
  },
  {
    type:"cortado",
    ismilk:true,
    customer:"sagar ",
  },
];

// creat your print order function here

 function printOrders(coffeeOrders) {
  if (coffeeOrders.length === 0) {
    console.log("No coffee orders to display.");
    return;
  }

  for(var i=0; i< coffeeOrders.length; i++){
    console.log(orders[i].type + " is with milkStatus "+ orders[i].milkStatus + " for " + orders[i].customer); 
  }

}

printOrders(orders);

