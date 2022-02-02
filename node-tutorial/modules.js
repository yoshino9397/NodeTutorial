/// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const myName = "yoshino";
const zenka = "carlo";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("Ash");
sayHi(myName);
sayHi(zenka);
