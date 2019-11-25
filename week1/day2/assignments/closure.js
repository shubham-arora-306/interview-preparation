function name(first,last) {
    var someText = "My name is ";
    
    function fullName () {       
    return someText + first + " " + last;   
    }
  
    return fullName;
  }
  
  var shubham = name("shubham", "Arora");
  
  console.log(shubham())