/*
NAME, CATEGORY, PRICE
Xiaomi Redmi 5A     Smartphone       1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000


let data1 = {
    name: 'Xiaomi Redmi 5A',
    category: 'Smartphone',
    price: 1199000 
  };

  let data2 = {
    name: 'Macbook Air',
    category: 'Laptop',
    price: 1100003775000 
  };

  let kamehame= [data1.price, data2.price];
  let sort = kamehame.sort();

  console.log(sort); */

  var price = '1199000 13775000 3549000 26799000 5399000 10499000';
  x = price.split(" ");
  var numArray = x;


  // ES5
  numArray = numArray.sort(function (a, b) {  return a - b;  });
  
  // ES2015
  numArray = numArray.sort((a, b) => a - b);
  
  //outputs: 99, 104, 140000

  console.log(numArray);