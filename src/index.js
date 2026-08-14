import { GTA_VI, COUNTDOWN_OVER } from '/constants.js';

const countdownP = document.querySelector('#countdown');

function updateCountdown(toWait) {
    const days = toDisplayValue(toWait / 1000 / 60 / 60 / 24);
    const hours = toDisplayValue((toWait / 1000 / 60 / 60) % 24);
    const minutes = toDisplayValue((toWait / 1000 / 60) % 60);
    const seconds = toDisplayValue((toWait / 1000) % 60);

    setMainText(`${days} d. ${hours}:${minutes}:${seconds}`);
}

function pad(value) {
    return value.toString().padStart(2, '0');
}

function toDisplayValue(value) {
    return pad(Math.floor(value));
}

function setMainText(text) {
    countdownP.textContent = text;
}

const intervalId = setInterval(() => {
    const date = new Date();
    const toWait = GTA_VI.getTime() - date.getTime();

    if (toWait <= 0) {
        clearInterval(intervalId);
        setMainText(COUNTDOWN_OVER);

        return;
    }

    updateCountdown(toWait);
}, 1000);
