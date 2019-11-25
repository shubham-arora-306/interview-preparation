function type(string){

    const m = {map :'none' , name :'shubham'}
    // we can change the properties of the object
    m.name = 'shubham arora'
  
    console.log(m)
    
    const x = string;
    
    x= 'bye'
    // will give error
    console.log(x)
  
}

type('hello')