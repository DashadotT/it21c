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

}