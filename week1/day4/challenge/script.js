var positiveinteger = (array) => {

    array = array.sort();
    // console.log(array)
    var i = 1;
    var max ;
  
    for (var j = array[0]; j < array[array.length -1]; j++){
      // console.log(array[j])
      if (array[j] === i){
        i++
      }
      else{ 
        max = i }
    }
  
    return max
}

console.log(positiveinteger([-1,42,0,1,23,6,89,2,3,4,5]))