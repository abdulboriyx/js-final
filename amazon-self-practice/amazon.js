import { playersData } from "./data.js";



function removePlayer(playerId) {
  let newPlayerData = [];

  playersData.forEach((player) =>{
    if (player.playerId !== playerId) {
      newPlayerData.push(player);
    };
  });

  console.log(newPlayerData);
};

let html = '';

playersData.forEach((player) =>{
  html += `
  <div class="player-container">
  <div class = "player-name player-name-${player.number}">
  <p>${player.playerName}. Position: ${player.position}. Number: ${player.number}</p>



  <div class="button-cover">

  <a href="#" class="sub-button remove-js" data-player-id="${player.number}">Remove</a>
    <p class="player-table"></p>
  </div>
  </div>

  </div>
  `;

});

document.querySelector('.container').innerHTML = html;



document.querySelectorAll('.remove-js').forEach((button) =>{
  button.addEventListener('click', () =>{
    let playerId = button.dataset.playerId;
    removePlayer(playerId);

    const playerList = document.querySelector(`.player-name-${playerId}`);

    playerList.remove();



  });
})
