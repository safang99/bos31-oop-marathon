import Cage from "./Cage.js"

class Zoo {
    constructor(name) {
        this.name = name
        this.cages = this.addCage()
        this.employees = []
    }
    addCage() {
        let initialCageArray = []
        for (let i = 0; i < 10; i++) {
            let cage = new Cage()
            initialCageArray.push(cage)
        }
        return initialCageArray
    }

    addEmployee(newEmployee) {
        this.employees.push(newEmployee)
    }

    addAnimal(newAnimal) {
        const firstEmptyCage = this.cages.find((cage) => {
            return cage.animal === null
        })
        if (firstEmptyCage) {
            firstEmptyCage.animal = newAnimal
        } else {
            return 'All of the cages are full!'
        }
    }

    visit() {
        let output = ""

        this.cages.forEach((cage) => {
            if (!cage.isEmpty()) {
                output += `${cage.animal.speak()}\n`
            }
        })
        this.employees.forEach((employee) => {
            output += `${employee.greet()}\n`
        })
        return output
    }
}

export default Zoo