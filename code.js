/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Classes here.

class Traveler {
    constructor (name, food = 1, isHealthy = true) {
        this.name = name;
        this.food = food;
        this.isHealthy = isHealthy;
    }
    hunt() {
        return this.food += 2;
    }
    eat() {
        if (this.food >= 1) {
            this.food -= 1;
        } else {
            this.isHealthy = false;
        }
    }
}

class Wagon {
    constructor (capacity, passengers = []) {
        this.capacity = capacity;
        this.passengers = passengers;
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length;
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler);
        }
    }
    shouldQuarantine() {
        if (this.passengers.filter(traveler => traveler.isHealthy === false).length > 0) {
            return true;
        } else {
            return false;
        }
    }
    totalFood() {
        let totalFood = 0;
        this.passengers.forEach(passenger => totalFood += passenger.food);
        return totalFood;
    }    
}   

class Doctor extends Traveler {
    constructor (name, food = 1, isHealthy = true) {
        super(name, food, isHealthy)
    }
    heal(traveler) {
       if (traveler.isHealthy !== true) {
           traveler.isHealthy = true;
       }
    }
}

class Hunter extends Traveler {
    constructor (name, food = 2, isHealthy = true) {
        super(name, food, isHealthy)
    }
    hunt() {
        return this.food += 5;
    }
    eat() {
        if (this.food >= 2) {
            this.food -= 2;
        } else {
            this.food = 0;
            this.isHealthy = false;
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            traveler.food += numOfFoodUnits;
            this.food -= numOfFoodUnits;
        }
    }
}