const GTA_VI = new Date(2026, 10, 19);

const countdownP = document.querySelector('#countdown');

function updateCountdown(date) {
    const days = Math.round(date.getTime() / 1000 / 60 / 60 / 24);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    countdownP.textContent = `${days} d. ${hours}:${minutes}:${seconds}`;
}

function getLocalDate(date) {
    const hours = 3 * 1000 * 60 * 60;

    return new Date(date.getTime() - hours);
}

setInterval(() => {
    const date = new Date();
    const toWaitDate = new Date(GTA_VI.getTime() - date.getTime());

    updateCountdown(getLocalDate(toWaitDate));
}, 1000);
