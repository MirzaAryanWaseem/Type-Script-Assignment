//Q no 14
let party=["Qasim","Junaid","Hammad","Naveed"]
for (let index = 0; index < party.length ; index++) {
console.log(`${party[index]} you have invited to party.`);

    
}//for loop
// i=1 means starting from 1 value that is junaid in array
// index < party length means break when array completed
//Q no 15
let party2=["Qasim","Junaid","Hammad","Naveed"]// old guest list
for (let index = 0; index < party2.length ; index++) {
console.log(`${party2[index]} you have invited to party.`);}
for (let index = 0; index < party2.length ; index++){
party2.pop();//this removes the last element from the array
party2.push("Mozammil");//this adds element in the last of the array
console.log(`${party2[index]} you have invited to party.`);}
// // Q no 16
// let party3=["Qasim","Junaid","Hammad","Naveed"]
// for (let index = 0; index < party3.length ; index++) {
// // console.log(`${party3[index]} you have invited to party.`);}
// for (let index = 0; index < party2.length ; index++){
// party2.push("Mozammil");
// //party2.unshift('Zain');
// //party3.splice(3,0,"Faizan");
// console.log(`${party2[index]} you have invited to party.`);}

