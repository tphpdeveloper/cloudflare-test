'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let clock = document.getElementById('clock');
    setInterval(() => {
        let date = new Date();

        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds()

        clock.innerHTML = `${hour}:${minute}:${second}`;
    }, 500);
})
