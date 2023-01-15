
import footballersData from './data.js';


let attackers = [];
let midfielders = [];
let defenders = [];
let goalkeepers = [];

for (let i = 0; i < footballersData.length; i++) {
    if (footballersData[i].position === "Attaquant") {
        attackers.push(footballersData[i]);
    } else if (footballersData[i].position === "Milieu") {
        midfielders.push(footballersData[i]);
    } else if (footballersData[i].position === "Défenseur") {
        defenders.push(footballersData[i]);
    } else if (footballersData[i].position === "Gardien") {
        goalkeepers.push(footballersData[i]);
    }
}
console.log("Attaquants: ", attackers);
console.log("Milieux: ", midfielders);
console.log("Défenseurs: ", defenders);
console.log("Gardiens: ", goalkeepers);



let attacker1 = document.getElementById("attacker-1");
attacker1.innerHTML = attackers[3].name;
let attacker2 = document.getElementById("attacker-2");
attacker2.innerHTML = attackers[1].name;
let attacker3 = document.getElementById("attacker-3");
attacker3.innerHTML = attackers[6].name;

let midfielder1 = document.getElementById("midfielder-1");
midfielder1.innerHTML = midfielders[0].name;
let midfielder2 = document.getElementById("midfielder-2");
midfielder2.innerHTML = midfielders[1].name;
let midfielder3 = document.getElementById("midfielder-3");
midfielder3.innerHTML = midfielders[9].name;

let defender1 = document.getElementById("defender-1");
defender1.innerHTML = defenders[14].name;
let defender2 = document.getElementById("defender-2");
defender2.innerHTML = defenders[1].name;
let defender3 = document.getElementById("defender-3");
defender3.innerHTML = defenders[0].name;
let defender4 = document.getElementById("defender-4");
defender4.innerHTML = defenders[6].name;

let goalkeeper = document.getElementById("goalkeeper-1");
goalkeeper.innerHTML = goalkeepers[2].name;

function updatePlayer(selectedPlayerId, players, elementId) {
    const element = document.getElementById(elementId);
    if(players[selectedPlayerId] && players[selectedPlayerId].name){
        element.innerHTML = players[selectedPlayerId].name;
    }
}
let select = document.getElementById("players-select");
let select2 = document.getElementById("players-select-2");
let select3 = document.getElementById("players-select-3");
let select4 = document.getElementById("players-select-4");

select.addEventListener("change", function() {
    updatePlayer(select.value, attackers, "attacker-1");
    updatePlayer(select.value + 4, attackers, "attacker-1");
    updatePlayer(select.value + 2, attackers, "attacker-1");
});

select2.addEventListener("change", function() {
    if(this === select2) {
        updatePlayer(select2.value, midfielders, "midfielder-2");
    }
});
select3.addEventListener("change", function() {
    if(this === select3) {
        updatePlayer(select3.value, defenders, "defender-3");
    }
});
select4.addEventListener("change", function() {
    if(this === select4) {
        updatePlayer(select4.value, goalkeepers, "goalkeeper-1");
    }
});
