//q no 20
//Task#20 : Think of something you could store in a array. 
//For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const Locations:string[]=["Neelum Valley","K2","Paris","Istanbul"];
console.log("\n List of Locations:\n");
for (let index = 0; index < Locations.length; index++) {
    console.log(Locations[index]);
    
    
}
console.log("...........End Q no21............");
//Q no 21
//Task#21 : They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.
interface type{
    Name:string,Age:number,Profession:string
}
let Obj:type={
    Name:"Aryan",
    Age:20,
    Profession:"Programmer"
};
console.log("\nObject containing information about me:\n");
console.log(`My Name is ${Obj.Name}.`);
console.log(`I am ${Obj.Age} years old.`);
console.log(`I am a ${Obj.Profession}.`);
console.log(`\n..........End Q no 21...........\n`);













