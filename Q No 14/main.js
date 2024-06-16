//Q no 14
var party = ["Qasim", "Junaid", "Hammad", "Naveed"];
for (var index = 0; index < party.length; index++) {
    console.log("".concat(party[index], " you have invited to party."));
} //for loop
// i=1 means starting from 1 value that is junaid in array
// index < party length means break when array completed
//Q no 15
var party2 = ["Qasim", "Junaid", "Hammad", "Naveed"];
for (var index = 0; index < party2.length; index++) {
    console.log("".concat(party2[index], " you have invited to party."));
}
for (var index = 0; index < party2.length; index++) {
    party2.pop();
    party2.push("Mozammil");
    console.log("".concat(party2[index], " you have invited to party."));
}
