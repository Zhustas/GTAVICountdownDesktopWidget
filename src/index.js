const GTA_VI = new Date(2026, 10, 19);

const countdownP = document.querySelector('#countdown');

function updateCountdown(toWait) {
    const days = toDisplayValue(toWait / 1000 / 60 / 60 / 24);
    const hours = toDisplayValue((toWait / 1000 / 60 / 60) % 24);
    const minutes = toDisplayValue((toWait / 1000 / 60) % 60);
    const seconds = toDisplayValue((toWait / 1000) % 60);

    countdownP.textContent = `${days} d. ${hours}:${minutes}:${seconds}`;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}

function toDisplayValue(value) {
    return pad(Math.floor(value));
}

setInterval(() => {
    const date = new Date();
    const toWait = GTA_VI.getTime() - date.getTime();

    updateCountdown(toWait);
}, 1000);
