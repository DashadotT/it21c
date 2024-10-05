//Input
const person1 = {
    name: "Mark Jovan Octat",
    age: 19,
    gender: "Male",
    hobby: "Playing instruments",
}

//Process and Output
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("Gender: " + person1.gender);
console.log("Hobby: " + person1.hobby);
console.log("--------------------------------");

// Class definition
class Person {
    constructor(name, age, gender, hobby) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobby = hobby;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Hobby: " + this.hobby);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Gender:</strong> ${this.gender}<br>
            <strong>Hobby:</strong> ${this.hobby}
        `;
    }
}
