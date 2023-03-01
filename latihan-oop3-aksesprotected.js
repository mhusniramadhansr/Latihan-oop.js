class Person {

    constructor(name, age) {
        //Akses protected
        let __address = "unknown";
        
        //methode protected
        this.getAdress = function() {
            return __address;
        };
    }
}

const person1 = new Person("mhusniramadhan", 20); 
console.log(person1.__address); //output : undifined
console.log(person1.getAdress());//output : unknown