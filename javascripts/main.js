const eventTargetButton = (e) => {
    const buttonTarget = document.getElementById("start");
    buttonTarget.addEventListener("click", httpPlayer1);
    buttonTarget.addEventListener("click", httpPlayer2);

}

function httpPlayer1 (e) {
    console.log(e);
    const playerOneUser = document.getElementById("user1");
    const playerOneUserValue = playerOneUser.value;
    const http = new XMLHttpRequest();
    http.onreadystatechange = function (){
        if (http.readyState == 4 && http.status == 200) {
            const data = JSON.parse(http.responseText);
            console.log(data);
            domString1(data);
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
            const data = JSON.parse(http.responseText);
            console.log(data);
            domString2(data);
        } else{
            console.log("status", http.status);
        }
    }
    http.open("GET", `https://teamtreehouse.com/${playerTwoUserValue}.json`);
    http.send();
};

domString1 = (dataArray) =>{
    console.log(dataArray);
    let domString ="";
    domString += `<h3>${dataArray.name}</h3>`;
    domString += `<img class="pic" src=${dataArray.gravatar_url}>`;
    console.log(domString);
    printToDom(domString,"card1");
};
domString2 = (dataArray) =>{
    console.log(dataArray);
    let domString ="";
    domString += `<h3>${dataArray.name}</h3>`;
    domString += `<img class="pic" src=${dataArray.gravatar_url}>`;
    console.log(domString);
    printToDom(domString, "card2");
};

printToDom = (domString, DivId) => {
    document.getElementById(DivId).innerHTML = domString;
}

const startApp = () => {
    eventTargetButton();
}
startApp();