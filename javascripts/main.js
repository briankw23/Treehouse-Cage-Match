const eventTargetButton = (e) => {
    const buttonTarget = document.getElementById("start");
    buttonTarget.addEventListener("click", httpPlayers);
};
const domString1 = (dataArray) =>{
    let domString ="";
    domString += `<h3>${dataArray.name}</h3>`;
    domString += `<img class="pic" src=${dataArray.gravatar_url}>`;
    domString +=`<h3 id="player1score">${dataArray.points.total}</h3>`;
    domString +=`<h3>Total Points</h3>`;
    printToDom(domString,"card1");
};
const domString2 = (dataArray) =>{
    let domString ="";
    domString += `<h3>${dataArray.name}</h3>`;
    domString += `<img class="pic" src=${dataArray.gravatar_url}>`;
    domString +=`<h3 id="player2score">${dataArray.points.total}</h3>`;
    domString +=`<h3>Total Points</h3>`;
    printToDom(domString, "card2");
};
printToDom = (domString, DivId) => {
    document.getElementById(DivId).innerHTML = domString;
}
function httpPlayers (e) {
    let players = [];
    const playerOneUser = document.getElementById("user1");
    const playerOneUserValue = playerOneUser.value;
    let http = new XMLHttpRequest();
    http.onreadystatechange = function (){
        if (http.readyState == 4 && http.status == 200) {
            const data1 = JSON.parse(http.responseText);
            players.push(data1);
            domString1(data1);
            second();        
        } else{
            console.log("status", http.status);
        }
    }
    http.open("GET", `https://teamtreehouse.com/${playerOneUserValue}.json`);
    http.send();

    function second (e) {
        const playerTwoUser = document.getElementById("user2");
        const playerTwoUserValue = playerTwoUser.value;
            let http2 = new XMLHttpRequest();
    http.onreadystatechange = function (){
        if (http.readyState == 4 && http.status == 200) {
            const data2 = JSON.parse(http.responseText);
            players.push(data2);
            domString2(data2);
            joiner(players);
        } else{
            console.log("status", http.status);
        }
    }
    http.open("GET", `https://teamtreehouse.com/${playerTwoUserValue}.json`);
    http.send();
    }   
};
const joiner = (playersArray) =>{

    let domString = "";
    if(playersArray[0].points.total > playersArray[1].points.total){
        domString += `<h3>${playersArray[0].name} is the winner!!!!</h3>`;
        for (let i = 0; i < playersArray[0].badges.length; i++) {
            domString += `<img class="img-responsive"  id="badge" src="${playersArray[0].badges[i].icon_url}">`;}
        }
         else
        {
        domString += `<h3>${playersArray[1].name} is the winner!!!!</h3>`;
        for (let m = 0; m < playersArray[1].badges.length; m++) {    
            domString += `<img class="img-responsive" id="badge" src="${playersArray[1].badges[m].icon_url}">`;
        }
    }
    printToDom(domString,"winner");
};
const startApp = () => {
    eventTargetButton();
};
startApp();
