var obj = {name:'shubham'};

//apply
var sum=["likes","react",'redux','thunk'];
var function1 = function(a,b,c){
  return this.name+" "+a+" "+b+" "+c;
}
console.log(function1.apply(obj,sum));

//bind
var function2 = function(a,b,c){
  return this.name+" "+a+" "+b+" "+c;
}
var x = function2.bind(obj);
console.log(x("likes","react",'redux','thunk'))

//call

var function3 = function(a,b,c){
  return this.name+" "+a+" "+b+" "+c;
}
console.log(function3.call(obj,"likes","react",'redux','thunk'))

