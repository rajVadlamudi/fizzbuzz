import { observable } from "mobx";

export default class Counter {
  id = Math.random();
  @observable num;

  constructor(num) {
    this.num = num;
  }
  
  get value() {
    return this.num;
  }

}
