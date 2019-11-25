class Animal {
    familyname = "";
    constructor(family) {
      this.familyName = family;
    }
    sayFamilyName() {
      console.log(this.familyName)
    }
}
  
class Cat extends Animal{
    breedname = "";
    constructor(breed){
      super("cat");
      this.breedName = breed;
    }
    sayBreedName(){
      console.log(this.breedName);
    }
}

let cat = new Cat('Persian');
cat.familyName = 'Carnivora';
// cat.breedName = 'Persian';
cat.sayFamilyName();
cat.sayBreedName();