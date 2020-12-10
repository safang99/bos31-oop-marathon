class Employee {
    constructor(firstName, lastName, title) {
        this.firstName = firstName
        this.lastName = lastName
        this.title = title || 'Zookeeper'

    }
    fullTitle() {
        return `${this.firstName} ${this.lastName}, ${this.title}`
    }
    greet() {
        return `${this.firstName} ${this.lastName} waved hello!`
    }
}

export default Employee