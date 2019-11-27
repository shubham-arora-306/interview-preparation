class Arithmetic {
    constructor() {
      this.value = 0;
    }
  
    sum(...values) {
      // console.log(values)
      this.value = values.reduce((sum, current) => sum + current );
      return this;
    }
    add(value) {
      this.value += value;
      return this;
    }
    subtract(value) {
      this.value -= value;
      return this;
    }
  
}
  
var x = new Arithmetic()

console.log(x.sum(1, 3, 6)   // => 10 
.subtract(3)   // =>  7 
.add(4)        // => 11 
.value)          // => 11 
  