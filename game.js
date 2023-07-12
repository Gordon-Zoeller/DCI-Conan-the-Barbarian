"use strict";

//Hero
class Hero {
    constructor(name, health, might) {
        this.name = name;
        this.health = health;
        this.might = might;
    };
    showStatus() { //Show Status
        if(this.health <= 0) {
            return `Defeated`;
        } else {
            return `${this.name}
    Health: ${this.health}
    Might: ${this.might}`;
        };
    };
    restoreHealth(villain) { //Restore Health
        this.health += 5;
        return `${this.showStatus()}
${villain.showStatus()}
${villain.does()}`;
    };
    restoreMight(villain) { //Restore Might
        this.might += 5;
        return `${this.showStatus()}
${villain.showStatus()}
${villain.does()}`;
    };
    strike(villain) { //Attack
        if(this.might >= 5) {
        villain.health -= 10;
        this.might -= 5;
        return `${this.showStatus()}
${villain.showStatus()}
${villain.does()}`;
        } else {
            return `Your might is too low for this attack.`;
        };
    };
    pierce(villain) { //Attack
        if(this.might >= 3) {
        villain.health -= 15;
        this.might -= 3;
        return `${this.showStatus()}
${villain.showStatus()}
${villain.does()}`;
        } else {
            return `Your might is too low for this attack.`;
        };
    };
    blow(villain) { //Attack
        if(this.might >= 1) {
        villain.health -= 5;
        this.might -= 1;
        return `${this.showStatus()}
${villain.showStatus()}
${villain.does()}`;
        } else {
            return `Your might is too low for this attack.`;
        };
    };
};

//Conan the Barbarian
const conan = new Hero("Conan", 90, 19);

//Villain
class Villain extends Hero{
    constructor(name, health, might, damage, power) {
        super(name, health, might);
        this.damage = damage;
        this.power = power;
    };
    does() {
        if(this.health <= 0) { //New Villain
            villains.shift();
            conan.health = 90;
            conan.might = 19;
            setTimeout(() => {
                if(villains.length > 1) {
                    console.log(`The next foe awaits you.`);
                } else if(villains.length === 1) {
                    console.log(`Your final foe awaits you.`);
                } else {
                    console.log(`Victory!`);
                };
            }, 1000);
            return `-----------------`;
        } else if(this.might < 5) { //Restore Might
            this.might += 5;
            setTimeout(() => {
                console.log(`${this.showStatus()}
${conan.showStatus()}
-----------------`);
            }, 1000);
            return `-----------------`;
        } else if(this.health <= 5) { //Restore Health
            this.health += 5;
            setTimeout(() => {
                console.log(`${this.showStatus()}
${conan.showStatus()}
-----------------`);
            }, 1000);    
            return `-----------------`;
        } else { //Attack
            conan.health -= this.damage;
            this.might -= this.power;
            setTimeout(() => {
                console.log(`${this.showStatus()}
${conan.showStatus()}
-----------------`);
            }, 1000);
            return `-----------------`;
        };
    };
};

//Villains
const frostGiant = new Villain("Frost-Giant", 6, 15, 20, 5); //Health, Might, Damage, Power (Power will be subtracted from Might if the Villain attacks)
const gwarunga = new Villain("Gwarunga", 15, 4, 25, 10);
const giantBlackSpieder = new Villain("Giant Black Spider", 15, 19, 30, 15);
const thothAmon = new Villain("Thoth-Amon", 15, 25, 35, 20);

const villains = [frostGiant, gwarunga, giantBlackSpieder, thothAmon];

//Fight
//console.log(conan.restoreMight(villains[0]));
//console.log(conan.restoreHealth(villains[0]));
//console.log(conan.strike(villains[0]));
//console.log(conan.pierce(villains[0]));
//console.log(conan.blow(villains[0]));

/*

*/

console.log(conan.blow(villains[0]));
setTimeout(() => {
    console.log(conan.pierce(villains[0]));
}, 2000);
setTimeout(() => {
    console.log(conan.blow(villains[0]));
}, 4000);
setTimeout(() => {
    console.log(conan.pierce(villains[0]));
}, 6000);
setTimeout(() => {
    console.log(conan.blow(villains[0]));
}, 8000);
setTimeout(() => {
    console.log(conan.pierce(villains[0]));
}, 10000);
setTimeout(() => {
    console.log(conan.blow(villains[0]));
}, 12000);
setTimeout(() => {
    console.log(conan.pierce(villains[0]));
}, 14000);

//console.log(villains);