const btn = document.getElementById('btn');
const socket = new WebSocket('ws://localhost:5000/');

socket.onopen = () => {
    socket.send(JSON.stringify({
        id: 555,
        method: "connection",
        username: "Ulbi TV"
    }));
    // console.log('Подключение было установлено');
}

socket.onmessage = (event) => {
    console.log('С сервера пришло сообщение ', event.data);
}

btn.onclick = () => {
    socket.send(JSON.stringify({
        message: "Привет",
        id: 555,
        method: "message",
        username: "Ulbi TV"
    }));
    // socket.send(prompt('Напишете ваше сообщение для webSocketa'));
}