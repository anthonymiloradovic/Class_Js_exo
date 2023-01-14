
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
attacker3.innerHTML = attackers[0].name;

let midfielder1 = document.getElementById("midfielder-1");
midfielder1.innerHTML = midfielders[0].name;
let midfielder2 = document.getElementById("midfielder-2");
midfielder2.innerHTML = midfielders[1].name;
let midfielder3 = document.getElementById("midfielder-3");
midfielder3.innerHTML = midfielders[2].name;

let defender1 = document.getElementById("defender-1");
defender1.innerHTML = defenders[14].name;
let defender2 = document.getElementById("defender-2");
defender2.innerHTML = defenders[1].name;
let defender3 = document.getElementById("defender-3");
defender3.innerHTML = defenders[0].name;
let defender4 = document.getElementById("defender-4");
defender4.innerHTML = defenders[9].name;

let goalkeeper = document.getElementById("goalkeeper-1");
goalkeeper.innerHTML = goalkeepers[2].name;

let select = document.getElementById("players-select");

select.addEventListener("change", function() {
    updatePlayer(select.value, attackers, "attacker-1");
    updatePlayer(select.value+1, attackers, "attacker-2");
    updatePlayer(select.value+2, attackers, "attacker-3");
});

function updatePlayer(selectedPlayerId, players, elementId) {
    // vérifier si l'élément ciblé existe dans la page HTML
    const element = document.getElementById(elementId);
    if (!element) return;

    // vérifier si l'index sélectionné existe bien dans le tableau
    if(players[selectedPlayerId]){
        element.innerHTML = players[selectedPlayerId].name;
    }
}
