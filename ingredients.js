var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var itemCount = 0;
while (itemCount < ingredients.length){
  console.log(ingredients[itemCount]);
  itemCount ++;
}
// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
console.log("End of for loop!");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (i = ingredients.length - 1; i >= 0; i--){
  console.log(ingredients[i]);
}
