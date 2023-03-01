class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Halo nama saya ${this.name} dan saya ${this.age} tahun`);
    }
}

const person1 = new Person("mhusniramadhan", 20);
console.log(person1.name);
console.log(person1.age);
person1.sayHello();