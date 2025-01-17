document.getElementById('chatbot-send-button').addEventListener('click', sendMessage);
document.getElementById('chatbot-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('chatbot-input');
    const message = inputField.value.trim();
    if (message !== '') {
        appendMessage('User', message);
        inputField.value = '';
        // Here you can add the logic to process the user's message and get a response from the chatbot
        appendMessage('Chatbot', 'This is a response from the chatbot.');
    }
}

function appendMessage(sender, message) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'chatbot-message ' + sender.toLowerCase();
    messageElement.textContent = sender + ': ' + message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
