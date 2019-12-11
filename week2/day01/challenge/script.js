// DS Algo search algorithm eg = binary search

function binarysearch(array, k , start , end){

    if (start > end){
      return
    }
  
    var mid = Math.floor((end+start)/2)
  
    if (array[mid] === k){
      var array2 = [];
      var array1 = [];
      array1.push(mid);
      for ( var i = 1 ; i <= array.length ; i++ ){
        if ( array[mid+i] == k){
          array1.push(mid+i)
        } else if (array[mid-i] == k){
          array1.push(mid-i)
          i++;
        } else {
          break
        }
      }
  
  
      if (array1.length == 1){
        array2[0] = array1[0]
        array2[1] = array1[0]
        console.log(array2)
      } else if (array1.length >= 2){
        array2[0] = Math.min(...array1);
        array2[1] = Math.max(...array1)
        console.log(array2)
      }
    
    }
  
    if (array[mid] > k){
      binarysearch(array, k, start, mid)
    } else if (array[mid] < k) {
      binarysearch(array, k, mid+1 , end )
    }
  
}


var numbers = [1,2,3,3,3,3,4,5,6,7,8]

binarysearch(numbers , 3, 0, 10)
  