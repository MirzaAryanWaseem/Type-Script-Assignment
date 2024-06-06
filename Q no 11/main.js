// Q no 11
var Name = ["Qasim", "Hammad", "Junaid", "Naveed"];
console.log("".concat(Name[0])); //this prints 1st element of array
console.log("".concat(Name[1])); //this prints 2nd element of array
console.log("".concat(Name[2])); //this prints 3rd element of array
console.log("".concat(Name[3])); //this prints 4th element of array
//array starting from zero
//ex: 1 is hammad
//Q no 11 (Other Method) using for loop
var Names = ["Qasim", "Hammad", "Junaid", "Naveed"];
for (var index = 0; index < Names.length; index++) {
    console.log(Names[index]);
}
