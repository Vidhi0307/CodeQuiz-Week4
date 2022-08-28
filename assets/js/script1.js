       
function showHighscores(event) {
event.preventDefault();

var playerInfo = JSON.parse(localStorage.getItem("playersInfo")) || [];
for (var x = 0; x < playerInfo.length; x++)
{
console.log(playerInfo);
if (playerInfo !== null) {
var listItem = document.createElement('li')

listItem.textContent = playerInfo[x].name + 
" scored " + playerInfo[x].highscore;
document.getElementById("highscore-list").appendChild(listItem);

}    
}
}
function ClearHighscorelist(){

window.localStorage.clear();

while (document.getElementById("highscore-list").firstChild) {
    document.getElementById("highscore-list").removeChild(document.getElementById("highscore-list").firstChild);
}}

   window.onload = showHighscores;
   document.getElementById('clearHighscores').addEventListener("click",ClearHighscorelist);