
// exempel 1 skapa en variabel för varje sak
let name1 = "John";
let name2 = "Petra";
let name3 = "Helga";

// exempel 2 lägg ihop allt i en variabel istället
// varje del kallas en post eller position
let names = ["John", "Petra", "Helga"];
console.log(names); // Skriv ut hela arrayen i konsolen

// skriv ut namnen ett i taget
// index börjar alltid med 0 och håller reda på ordningen
console.log(names[0]); // John
console.log(names[1]); // Petra
console.log(names[2]); // Helga

// exempel 3 hur många variabler finns i arrayen?
console.log( names.length ); // 3

// skriv ut alla namnen med en for-loop
for(let i=0; i<names.length; i++){
  console.log(names[i]);
  // första varvet är i 0 och John skrivs ut
  // andra varvet är i 1 och Petra skrivs ut
  // tredje varvet är i 1 och Helga skrivs ut
}

// ändra ett av namnen
names[1] = "Kim";
console.log(names[1]);
console.log(names); // Skriv ut hela arrayen i konsolen

// lägg till på slutet
names.push("Lisa"); // Lisa ingår nu i arrayen på sista platsen
names.push("Goran");
console.log(names[3]); // Lisa
console.log(names[4]);
console.log(names); // Skriv ut hela arrayen i konsolen

// ta bort en på slutet och skriv ut den sista
let poppedName = names.pop(); // Goran är nu borta
console.log(names);

// lägg till en i början och numrera om alla efter
console.log(names[2]); // Helga
names.unshift('Mohammed');
names.unshift('Olga');
console.log(names[2]); // John
console.log(names); // Olga, Mohammed, John, Kim, Helga, Lisa

// ta bort en 
let shiftedName = names.shift(); // kan även användas utan att spara det som tas bort
console.log(shiftedName); // Olga, som nu inte finns i names längre
console.log(names); // Mohammed, John, Kim, Helga, Lisa

// splice låter du göra allt du vill
names.splice(1,1); // börja på index 1, ta bort 1 post
console.log(names); // Mohammed, Kim, Helga, Lisa
names.splice(2,0,"Yngve"); // börja på index 2, ta bort 0 poster, lägg till Yngve
console.log(names); // Mohammed, Kim, Yngve, Helga, Lisa
names.splice(0,2,"Berit", "Ceasar", "Doris"); // börja på index 0, ta bort 2 poster, lägg till Berit, Ceasar, Doris
console.log(names); // Berit, Ceasar, Doris, Yngve, Helga, Lisa



// sortera arrayen
names.sort()

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
