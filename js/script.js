//**** CLASSES ****
// class Animal {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }

//   static compare(animalA, animalB) {
//     return animalB.speed - animalA.speed;
//   }

  // run(speed = this.speed) {
  //   this.speed = speed;
  //   console.log(`${this.name} бежит со скоростью ${this.speed}.`)
  // }

  // stop() {
  //   this.speed = 0;
  //   console.log(`${this.name} стоит.`)
  // }

  // qualifySpeed() {
  //   if(this.speed < 0) {
  //     console.log(`${this.name} сломал Матрицу!`)
  //   } else if(this.speed == 0) {
  //     console.log(`Подождем, пока ${this.name} побежит.`)
  //   } else if(this.speed < 40) {
  //     console.log(`${this.name} - стайер.`)
  //   } else if(this.speed < 80) {
  //     console.log(`${this.name} - спринтер.`)
  //   } else if(this.speed <= 100) {
  //     console.log(`${this.name} бежит как гепард!`)
  //   } else if(this.speed > 100) {
  //     console.log(`${this.name} не животное.`)
  //   }
  // }
// }

// class Rabbit extends Animal {
  // hide() {
  //   console.log(`${this.name} прячется!`)
  // }
// }

// let rabbits = [
//   new Rabbit("Белый кролик", 15),
//   new Rabbit("Рыжий кролик", 43),
//   new Rabbit("Зеленый кролик", 81)
// ]

// rabbits.sort(Animal.compare);

// rabbits[1].qualifySpeed()
// rabbits[2].hide();

// console.log(`${rabbits[0].name} самый быстрый.`);



//**** PROTOTYPES ****
const animal = {
  name: this.name,
  speed: this.speed,
  compare(animalA, animalB) {
    return animalB.speed - animalA.speed;
  },
  run(speed = this.speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`)
  },

  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит.`)
  },

  qualifySpeed() {
    if(this.speed < 0) {
      console.log(`${this.name} сломал Матрицу!`)
    } else if(this.speed == 0) {
      console.log(`Подождем, пока ${this.name} побежит.`)
    } else if(this.speed < 40) {
      console.log(`${this.name} - стайер.`)
    } else if(this.speed < 80) {
      console.log(`${this.name} - спринтер.`)
    } else if(this.speed <= 100) {
      console.log(`${this.name} бежит как гепард!`)
    } else if(this.speed > 100) {
      console.log(`${this.name} не животное.`)
    }
  }
}

function Rabbit(name, speed) {
  this.name = name;
  this.speed = speed;
  this.hide = function() {
    console.log(`${this.name} прячется!`)
  }
}

Rabbit.prototype = animal;

const rabbits = [
  new Rabbit("Белый кролик", 15),
  new Rabbit("Рыжий кролик", 43),
  new Rabbit("Зеленый кролик", 81)
];

rabbits[2].run();
rabbits[1].qualifySpeed();
rabbits.sort(animal.compare()); // не работает(