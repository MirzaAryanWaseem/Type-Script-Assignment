//Q no 14
let party=["Qasim","Junaid","Hammad","Naveed"]
for (let index = 0; index < party.length ; index++) {
console.log(`${party[index]} you have invited to party.`);

    
}//for loop
// i=1 means starting from 1 value that is junaid in array
// index < party length means break when array completed
//Q no 15
let party2=["Qasim","Junaid","Hammad","Naveed"]
for (let index = 0; index < party.length ; index++) {
console.log(`${party2[index]} you have invited to party.`);
party2.pop();
party2.push("Mozammil");
console.log(`${party2[index]} you have invited to party.`);}

