var palindrome = (string) => {
    var array = [];
    for (let i =0 ; i <string.length ; i++){
      let j = 1
      var m ="";
      while (string.charAt(i-j) == string.charAt(i+j)){
        // i--;
        array.push(string.substring(i-j,i+j+1))
        j++;
      }
  
    } 
  
    var max = Math.max(...array.map(el => el.length))
  
    for (var l =0 ; l <array.length ; l++){
      if (array[l].length === max){
        var max1 = array[l]
      }
    }
  
  
    return max1
  }
  
  console.log(palindrome('gemakayakamjhomohf'))