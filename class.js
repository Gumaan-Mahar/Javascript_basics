"use strict";

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    };

    get age() {
        return this._age;
    };

    set age(updatedAge) {
        this._age = updatedAge;
    };

    writeDetails() {
        return `Name: ${this.name} \n Age: ${this._age}`;
    }
};

const newUser = new User("Jennifer Lawerence", 31);
console.log(newUser.writeDetails());

newUser.age = 40;
console.log(newUser.writeDetails());

const arr1 = [1, 2, 3, 4,];
const arr2 = [5, 6, 7, 8,];
console.log(Math.max(...arr1, ...arr2));
console.log(Boolean(NaN));
