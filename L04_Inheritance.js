class Person {

    //Private Fields
    #name;
    #age;
    #gender;
    #hobby;

    constructor(name, age, gender, hobby) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
        this.#hobby = hobby;
    }

    //Getters
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get gender() {
        return this.#gender;
    }

    get hobby() {
        return this.#hobby;
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