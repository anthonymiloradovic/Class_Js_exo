class Child {
    constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    }
    goToschool(){
        console.log(this.name + " est scolarisé à " + this.city); 
        document.querySelector(".name").innerHTML = this.name;
        document.querySelector(".age").innerHTML = this.age;
        document.querySelector(".city").innerHTML = this.city;
    
    }
    doHomework(){
        console.log(this.name + " fait ses devoirs ");
    }
    playWithFriends(){
        console.log(this.name + " joue avec ses amis ");
    }

}

class Bakery {
    constructor(nameBakery, candies) {
        this.nameBakery = nameBakery;
        this.candies = candies;
    }
    buyCandies(child, quantity) {
        if(this.candies < quantity) {
            console.log("Désolé " + child.name + ", nous n'avons plus assez de bonbons.");
            return;
        }
        this.candies -= quantity;
        console.log(child.name + " a acheté " + quantity + " bonbons chez " + this.nameBakery);
        document.querySelector(".nameBakery").innerHTML = this.nameBakery;
        document.querySelector(".candies").innerHTML = this.candies;
    }
}

let child1 = new Child("Emma", 8, "Paris");
let child2 = new Child("Paul", 9, "Marseille");
let child3 = new Child("Karim", 7, "Lyon");

let bakery1 = new Bakery("Caquelin", 100);
let bakery2 = new Bakery("Lenôtre", 50);

child3.goToschool();
bakery1.buyCandies(child2, 20)

console.log("Je m'appelle " + child1.name + " j'ai " + child1.age + " ans et j'habite à " + child1.city);
console.log(child3.name + " a acheté 8 bonbons chez " + bakery2.nameBakery);
// affiche "I am Emma and I am 8 years old and I live in Paris"
console.log('%c Javascript is beautiful \ud83d\ude09','color: #C71585; font-weight: bold; background-color: #fffdd0;');