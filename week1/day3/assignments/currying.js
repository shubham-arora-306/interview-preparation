function sayHello(name){
    return function(greeting){
      return greeting + " "+ name;
    }
}

var sayHello1 = sayHello("AttainU");
console.log(sayHello1("hello"));