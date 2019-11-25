var median = (arr1 ,arr2) => {

    var array = arr1.concat(arr2)
  
    array = array.sort()
  
    if(array.length % 2 == 0){
      console.log(array)
      let k = array.length/2 
      let x = (array[k] + array[k-1])/2
      console.log('median is '+ x)
  
    } else {
  
      let k = Math.floor(array.length/2)
      console.log(array)
      console.log('median is '+array[k])
    }
  }
  
  
  median([1,2],[3,4])