const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0
const MINIMUM_HUNGER = 0

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0
    this.fitness = 10
    this.growUp = function() {
        this.age += 1;
        this.fitness -= 3
        this.hunger += 5
    };
    this.children = []


}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    if (this.isAlive === true) {
        this.age += 1;
        if ((this.fitness - 3) >= MINIMUM_FITNESS) {
            this.fitness -= 3
        } else {
            this.fitness = MINIMUM_FITNESS
        }
        this.hunger += 5
    } else {
        return 'Your pet is no longer alive :('
    }


}

Pet.prototype.walk = function() {
    if (this.isAlive === true) {
        if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
            this.fitness += 4
        } else {
            this.fitness = MAXIMUM_FITNESS
        }
    } else {
        throw 'Your pet is no longer alive :('
    }

}
Pet.prototype.feed = function() {
    if (this.isAlive === true) {
        if ((this.hunger - 3) >= MINIMUM_HUNGER) {
            this.hunger -= 3
        } else {
            this.hunger = MINIMUM_HUNGER
        }
    } else {
        throw 'Your pet is no longer alive :('
    }

}

Pet.prototype.checkUp = function() {
    if (this.fitness <= 3 && this.hunger < 5) {
        return "I need a walk"
    }

    if (this.hunger >= 5 && this.fitness > 3) {
        return "I am hungry"
    }

    if (this.fitness <= 3 && this.hunger >= 5) {
        return "I am hungry AND I need a walk"
    }

    if (this.fitness >= 3 && this.hunger <= 5) {
        return "I feel great"
    }
    if (this.isAlive === false) {
        throw 'Your pet is no longer alive :('
    }
}

Pet.prototype.adoptChild = function(child) {
    this.children.push(child)

    let childObject = this.children.map(({ name, children }) => ({ name, children }));

    return childObject
}




module.exports = Pet;