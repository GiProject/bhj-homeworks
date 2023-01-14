const botResponseMessages = [
    'Мы еще не проснулись, приходите через 10 лет!',
    'Привет! Пока!',
    'Ну что опять?!',
    'Не слова больше, уже ухожу!',
    'Уверен Вам это не нужно!'
];
document.querySelector('.chat-widget__side').addEventListener('click', (e) => {
 document.querySelector('.chat-widget').classList.add('chat-widget_active');
});
const messages = document.querySelector( '.chat-widget__messages');
const date = new Date();
document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        let messageInput = document.getElementById('chat-widget__input');
        let message = messageInput.value.trim();
        if (message !== '') {
            messages.innerHTML += `
              <div class="message message_client">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">${message}</div>
            </div>
            `;
            messageInput.value = '';
            setTimeout(() => messages.innerHTML += ` 
             <div class="message">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">${botResponse()}</div>
              </div>`, 500);
        }
    }
})

function botResponse()
{
    return botResponseMessages[Math.floor(Math.random()*botResponseMessages.length)];
}

function getTime()
{
    let date = new Date(),
        hours = date.getHours();
        minutes = date.getMinutes();
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        return hours + ':' + minutes;
}