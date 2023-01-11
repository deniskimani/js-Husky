const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('constructor', () => {
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
});

describe('constructor', () => {
    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5)
        expect(pet.fitness).toEqual(7)
    });


});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {


    it('decreases hunger level by 3', () => {
        const pet = new Pet('fido');

        pet.hunger = 8;
        pet.feed();

        expect(pet.hunger).toEqual(5);
    });

    it('decreases hunger level to a minimum of 0', () => {
        const pet = new Pet('fido');

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });


});


describe('checkUp', () => {


    it('checks hunger level ', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;
        expect(pet.checkUp()).toEqual("I am hungry");
    });

    it('checks fitness ', () => {
        const pet = new Pet('fido');

        pet.fitness = 3;
        expect(pet.checkUp()).toEqual("I need a walk");
    });

    it('checks fitness and hunger level are not okay', () => {
        const pet = new Pet('fido');
        pet.fitness = 2
        pet.hunger = 7;
        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    });
    it('checks fitness and hunger level are okay', () => {
        const pet = new Pet('fido');
        pet.fitness = 6
        pet.hunger = 3;
        expect(pet.checkUp()).toEqual("I feel great");
    });
});

describe('isAlive', () => {


    it('isAlive value to true ', () => {
        const pet = new Pet('fido');

        pet.hunger = 8;
        pet.fitness = 3;
        pet.age = 20;

        expect(pet.isAlive).toEqual(true);
    });

    it('isAlive value to false', () => {
        const pet = new Pet('fido');

        pet.hunger = 10;
        pet.fitness = 3;
        pet.age = 20;

        expect(pet.isAlive).toEqual(false);
    });
});


describe('having children', () => {
    it('gives birth to child', () => {
        const parent = new Pet('Fido');
        const child = new Pet("Rex")

        expect(parent.adoptChild(child)).toEqual([{ "children": [], "name": "Rex" }])


    });


});