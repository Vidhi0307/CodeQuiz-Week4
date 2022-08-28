       
function showHighscores(event) {
event.preventDefault();

var playerInfo = JSON.parse(localStorage.getItem("playersInfo"));
for (var x = 0; x < playerInfo.length; x++)
{
console.log(playerInfo);
if (playerInfo !== null) {
var listItem = document.createElement('li')

listItem.textContent = playerInfo[x].name + 
" got " + playerInfo[x].highscore;
document.getElementById("highscore-list").appendChild(listItem);

}    
}
}
function ClearHighscorelist(){

console.log('clear called');
window.localStorage.clear();

}

   window.onload = showHighscores;
   document.getElementById('clearHighscores').addEventListener("click",ClearHighscorelist);