const clockContainer = document.querySelector(".js-clock"),
clcokTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes =date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clcokTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
                                  // 조건 ?(==if) 참 :(==else) 거짓
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();