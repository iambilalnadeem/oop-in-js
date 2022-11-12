//OOP in JS (practising examples from (https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)

//using object literal

//Defining Object
let person = {
    firstname: "Bilal",
    lastname: "Baig",

//method
    a:function(){
    return('The name of the person is ' + person.firstname +" "+ person.lastname);
},
//object within object
    contact: {
        mobile: 1234,
        email: "iambilalnadeem@gmail.com"
    }
}
console.log(person.a());
console.log(person.contact.mobile);
console.log(person.contact.email);

//----------------------------------------------------------------------------------

//using a constructor

function func(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}

//new instances
let person1 = new func('Bilal','Baig');
let person2 = new func('Ali','Ahmed');

console.log(person1.first_name + " " + person1.last_name);
console.log(person2.first_name + " " + person2.last_name);


//using Object.create() method
//simple oibject
const learnObj = {
    isLearning: false,
    stuInfo : function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isLearning}.`)
    }
    }
// Object.create() method
    const me = Object.create(learnObj);

    me.name = 'Bilal';

//inherited properties can be overwritten
    me.isLearning = true;

    me.stuInfo();

    //classes

    //Defining class using es6

    class Vehicle {
        constructor(name, brand, engine) {
            this.name = name;
            this.brand = brand;
            this.engine = engine;
        }

        getInfo(){
            console.log(`The bike is ${this.brand} ${this.name} ${this.engine}.`);
        }
    }

    let bike1 = new Vehicle('Hayabusa','Suzuki','400cc');
    let bike2 = new Vehicle('Retro','Vlektra', '440cc');
    let bike3 = new Vehicle('GS150', 'Suzuki','150cc');

    console.log(bike1.brand, bike1.name, bike1.engine);
    console.log(bike2.brand, bike2.name, bike2.engine);
    console.log(bike3.brand, bike3.name, bike3.engine);

    bike1.getInfo();
    bike2.getInfo();
    bike3.getInfo();

    //encapsulation

    class Man {
        constructor(name, age, weight){
            this.name = name;
            this.age = age;
            this.weight = weight;
        }

        add_Address(add){
            this.add = add;
        }
        getInformation(){
            console.log(`The name is ${this.name}, age is ${this.age}, weight is ${this.weight}`);
        }
    }

    let man1 = new Man('Bilal','24','70');
    man1.add_Address('Pakistan');
    man1.getInformation();

//abstraction

function newFunc(fname, lname){
    let firstName = fname;
    let lastName = lname;

    let getNoDetails = function(){
        console.log(`The first name is ${firstName} and last name is ${lastName}`);
    }
    this.getADetail = function(){
        console.log(`The first name is ${firstName} and last name is ${lastName}`);
    }

}

let function1 = new newFunc('Bilal','Baig');
console.log(function1.firstname);
function1.getNoDetails;
function1.getADetail();
