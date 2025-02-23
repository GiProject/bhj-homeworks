let clickCounterElement = document.getElementById('clicker__counter');
let clickCount = parseInt(clickCounterElement.innerText);
let cookie = document.getElementById('cookie');
cookie.onclick  = () => {
    let cookieStyle = {
        width: cookie.width,
        height: cookie.height
    };
    cookie.width = cookieStyle.width + 5;
    cookie.height = cookieStyle.height + 5;
    clickCounterElement.innerText = ++clickCount;
    setTimeout(() => {
        cookie.width = cookieStyle.width;
        cookie.height = cookieStyle.height;
    }, 50);
}
