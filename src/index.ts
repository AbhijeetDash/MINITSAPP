import { add, multiply } from "./utils/mathUtils";
import { capitalize } from "./utils/stringUtils";

class Main {
  addNumbers(){
    return add(2, 3);
  }

  multiplyNumbers() {
    return multiply(2, 3)
  }
}

const main: Main = new Main();
console.log("Sum: ", main.addNumbers());
console.log("Product: ", main.multiplyNumbers());
console.log("Capitalized: ", capitalize("hello"));


