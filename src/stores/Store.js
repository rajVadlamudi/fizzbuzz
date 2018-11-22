import { observable, computed, action } from "mobx";

import Counter from "./Counter";

export default class Store {
  @observable numbers;

  constructor(numbers = []) {
    this.numbers = numbers;
  }

  @computed
  get totalCount() {
    return this.numbers.length;
  }

  initialiseStore(){
    const max = 100;
    var result = 0;
    while(result!=max){
      result++;
      this.addCounter(result);  
    } 
  }
  
  evalNum(num) {
  	var output = num;
  	if((num % 3) === 0) output = "Fizz";
  	if((num % 5) === 0) {
  		if(output == "Fizz")
  			output += "Buzz";
  		else 
  			output = "Buzz";
  	}

    return output;
  }

  @action
  addCounter(num) {
    this.numbers.push(new Counter(this.evalNum(num)));
  }
}
