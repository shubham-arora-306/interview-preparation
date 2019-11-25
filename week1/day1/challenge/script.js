var twosum = (array,target) => {
    var object = {};
    for(let i =0; i <array.length; i++ ){
        key = array[i]
        object[key] = i ;
    }

    for (let j=0; j<array.length ; j++){
        let diff = target - array[j]
        if(object.hasOwnProperty(diff) && object[key] !== j ){
        return '['+j+","+object[diff]+']';
        } else{
        return 'does not exist' 
        }
    }
}
  
console.log(twosum([2,7,11,15],11))