console.log("test");

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
        } else{
            console.log("status", http.status);
        }
    }
    http.open("GET", `https://teamtreehouse.com/${playerTwoUserValue}.json`);
    http.send();
};


const startApp = () => {
    eventTargetButton();
}
startApp();