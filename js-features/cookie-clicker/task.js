let clickCounterElement = document.getElementById('clicker__counter');
let clickCount = parseInt(clickCounterElement.innerText);
let cookie = document.getElementById('cookie');
let cookieStyle = {
    width: cookie.width,
    height: cookie.height
}
cookie.onclick  = () => {
    cookie.width = cookieStyle.width + 5 + 'px';
    cookie.height = cookieStyle.height + 5 + 'px';
    clickCounterElement.innerText = ++clickCount;
    setTimeout(() => {
        cookie.width = cookieStyle.width + 'px';
        cookie.height = cookieStyle.height + 'px';
    }, 50);
}