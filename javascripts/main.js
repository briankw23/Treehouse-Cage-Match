const eventTargetButton = (e) => {
    const buttonTarget = document.getElementById("start");
    buttonTarget.addEventListener("click", httpPlayer1);
    buttonTarget.addEventListener("click", httpPlayer2);
    buttonTarget.addEventListener("click", httpPlayers);
 
 
}
function httpPlayer1 (e) {
    console.log(e);
    const playerOneUser = document.getElementById("user1");
    const playerOneUserValue = playerOneUser.value;
    const http = new XMLHttpRequest();
    http.onreadystatechange = function (){
        if (http.readyState == 4 && http.status == 200) {
            const data1 = JSON.parse(http.responseText);
            console.log(data1);
            domString1(data1);
        } else{
            console.log("status", http.status);
        }
    }
    http.open("GET", `https://teamtreehouse.com/${playerOneUserValue}.json`);
    http.send();
};
function httpPlayer2 (e) {
    console.log(e);
    const playerTwoUser = document.getElementById("user2");
    const playerTwoUserValue = playerTwoUser.value;
    const http = new XMLHttpRequest();
    http.onreadystatechange = function (){
        if (http.readyState == 4 && http.status == 200) {
            const data2 = JSON.parse(http.responseText);
            console.log(data2);
            domString2(data2);
        } else{
            console.log("status", http.status);
        }
    }
    http.open("GET", `https://teamtreehouse.com/${playerTwoUserValue}.json`);
    http.send();
};

const domString1 = (dataArray) =>{
    console.log(dataArray);
    let domString ="";
    domString += `<h3>${dataArray.name}</h3>`;
    domString += `<img class="pic" src=${dataArray.gravatar_url}>`;
    domString +=`<h3 id="player1score">${dataArray.points.total}</h3>`;
    domString +=`<h3>Total Points</h3>`;
    console.log(domString);
    printToDom(domString,"card1");
};
const domString2 = (dataArray) =>{
    console.log(dataArray);
    let domString ="";
    domString += `<h3>${dataArray.name}</h3>`;
    domString += `<img class="pic" src=${dataArray.gravatar_url}>`;
    domString +=`<h3 id="player2score">${dataArray.points.total}</h3>`;
    domString +=`<h3>Total Points</h3>`;
    console.log(domString);
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
            console.log(data1);
            players.push(data1.points.total);
            players.push(data1.badges);
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
            console.log(data2);
            players.push(data2.points.total);
            players.push(data2.badges);
        } else{
            console.log("status", http.status);
        }
    }
    http.open("GET", `https://teamtreehouse.com/${playerTwoUserValue}.json`);
    http.send();
    }
    // console.log(players);
    joiner(players);
};

const joiner = (playersArray) =>{
    console.log(playersArray);
    
}
const startApp = () => {
    eventTargetButton();
}
startApp();

