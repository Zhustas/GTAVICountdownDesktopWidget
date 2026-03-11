const { getCurrentWindow } = window.__TAURI__.window;

const exitBtn = document.querySelector('#exit');

exitBtn.addEventListener('click', async function () {
    await getCurrentWindow().destroy();
});
