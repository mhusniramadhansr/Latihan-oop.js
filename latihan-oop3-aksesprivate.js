class Person {

    constructor(name, age) {
        //Akses private
        let _name = name;

        //function getter untuk mengambil variabel private
        this.getName = function() {
            return _name;
        };
    }
}

const person1 = new Person("mhusniramadhan", 20); //instansiasi
console.log(person1._name); //output : undifined
console.log(person1.getName()); //output : mhusniramadhan