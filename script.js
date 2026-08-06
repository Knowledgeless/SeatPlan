
const seatData = {

Math: [
{room:"N-402", start:2601-023, end:2605-175},
{room:"N-404", start:2605-180, end:2606-103},
],

Science: [
{room:"N-404", start:2603-079, end:2606-101},
],

Quiz: [
{room:"N-302", start:2600-003, end:2603-032},
{room:"N-304", start:2603-035, end:2604-016},
],

Mathematics_and_Science: [
{room:"S-401", start:2601-024, end:2605-039},
{room:"S-402", start:2605-040, end:2605-198},
{room:"S-403", start:2605-202, end:2606-105},
]

};


function searchSeat(){

let username = parseInt(document.getElementById("username").value);
let category = document.getElementById("category").value;

let resultBox = document.getElementById("result");

if(!username || !category){
resultBox.innerHTML = "Please enter username and category.";
return;
}

let rooms = seatData[category];

for(let i=0;i<rooms.length;i++){

if(username >= rooms[i].start && username <= rooms[i].end){

resultBox.innerHTML = "Your Room Number Is <h1><b><span class='text-success'>" + rooms[i].room + "</span></b></h1>";
return;

}

}

resultBox.innerHTML = "<h2><span class='text-danger'>Seat not found</span></h2>";

}
