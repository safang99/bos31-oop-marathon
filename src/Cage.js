class Cage {
    constructor() {
        this.animal = null

    }

    isEmpty() {
        if (this.animal === null) {
            return true
        } else {
            return false
        }
    }
}

export default Cage