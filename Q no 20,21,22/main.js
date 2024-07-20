//q no 20
//Task#20 : Think of something you could store in a array. 
//For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var Locations = ["Neelum Valley", "K2", "Paris", "Istanbul"];
console.log("\n List of Locations:\n");
for (var index = 0; index < Locations.length; index++) {
    console.log(Locations[index]);
}
console.log("...........End Q no21............");
var Obj = {
    Name: "Aryan",
    Age: 20,
    Profession: "Programmer"
};
console.log("\nObject containing information about me:\n");
console.log("My Name is ".concat(Obj.Name, "."));
console.log("I am ".concat(Obj.Age, " years old."));
console.log("I am a ".concat(Obj.Profession, "."));
console.log("\n..........End Q no 21...........\n");
//Q no 22
//Task#22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
var array = ["Ali", 17, "Student"];
console.log("Produce an index error:");
console.log(array[3]);
console.log("\nCorrect index error:");
console.log(array[2]);
console.log(".....End q no 22.....");
