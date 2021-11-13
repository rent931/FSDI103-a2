console.log("Executed");
let productName= prompt(`Enter product name`);
let quantity= prompt(`Enter quantity for ${productName}`);
let productPrice= prompt(`Enter price`);
let tax=(.07);
let total= (quantity*productPrice+ quantity*productPrice*tax);  

console.log(productName, quantity*productPrice, .07*quantity*productPrice, total);
