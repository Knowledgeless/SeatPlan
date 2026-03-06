
const seatData = {

junior: [
{room:"S-203", start:102667, end:313060},
{room:"S-206", start:316293, end:401826},
{room:"S-207", start:401944, end:422333},
{room:"S-210", start:422849, end:501422},
{room:"S-211", start:501894, end:518498},
{room:"S-302", start:518583, end:541632},
{room:"S-303", start:542348, end:631374},
{room:"S-305", start:631575, end:709902},
{room:"S-306", start:710107, end:721913},
{room:"S-308", start:722160, end:730851},
{room:"S-309", start:730856, end:751582}
],

higher: [
{room:"S-203", start:101980, end:120970},
{room:"S-206", start:121976, end:309497},
{room:"S-207", start:313442, end:419164},
{room:"S-210", start:421232, end:527283},
{room:"S-211", start:527459, end:725185},
{room:"S-302", start:726495, end:751571}
],

primary: [
{room:"S-401", start:114462, end:539856},
{room:"S-402", start:540158, end:607296},
{room:"S-403", start:607626, end:628094},
{room:"S-404", start:628142, end:701203},
{room:"S-406", start:701560, end:709062},
{room:"S-407", start:709246, end:730612},
{room:"S-409", start:730668, end:739049},
{room:"S-410", start:739060, end:751581}
],

secondary: [
{room:"S-401", start:101247, end:310450},
{room:"S-402", start:311950, end:410741},
{room:"S-403", start:412058, end:429038},
{room:"S-404", start:430562, end:511718},
{room:"S-406", start:511719, end:545812},
{room:"S-407", start:547331, end:708166},
{room:"S-409", start:711545, end:737418},
{room:"S-410", start:737505, end:751569}
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