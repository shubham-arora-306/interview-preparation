// Array Destructuring
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);
console.log('red ' + red + ", green " + green )


// object destructuring

const student = {
    firstname: 'ram',
    lastname: 'gopal',
    country: 'verma'
};

const { firstname, lastname, country } = student;
console.log(firstname +" "+ lastname +" "+ country); 
// ram gopal verma