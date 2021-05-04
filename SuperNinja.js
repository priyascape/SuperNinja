//parent Ninja class
class Ninja {
    constructor(name, health, speed = 3, strength =3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName()
    {
        console.log(this.name)
    }
    showStats()
    {
        console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength : ${this.strength}`)
    }
    drinkSake()
    {
        this.health += 10;
    }

}
// child Sensei class
class Sensei extends Ninja {
    constructor(name, health=200, speed = 10, strength =10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom=wisdom;
    }
speakWisdom()
{
    super.drinkSake();  
    console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

showStats()
{
    super.showStats();
    console.log(`Wisdom:${this.wisdom}`);
}
}
const superSensei = new Sensei("Master Splinter");    
superSensei.drinkSake();
superSensei.speakWisdom();
superSensei.showStats();

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


//print name