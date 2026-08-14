const { getCurrentWindow, currentMonitor } = window.__TAURI__.window;
const { LogicalPosition, LogicalSize } = window.__TAURI__.dpi;

const monitor = await currentMonitor();
const currentWindow = await getCurrentWindow();

const exitBtn = document.querySelector('#exit');
exitBtn.addEventListener('click', async function () {
    await currentWindow.destroy();
});

const WINDOW_WIDTH_PERCENTAGE = 0.17, // 0.15
    WINDOW_HEIGHT_PERCENTAGE = 0.2, // 0.18
    PADDING_PERCENT = 0.002;

const WINDOW_WIDTH = monitor.size.width * WINDOW_WIDTH_PERCENTAGE,
    WINDOW_HEIGHT = monitor.size.height * WINDOW_HEIGHT_PERCENTAGE,
    PADDING = monitor.size.width * PADDING_PERCENT;

await currentWindow.setSize(new LogicalSize(WINDOW_WIDTH, WINDOW_HEIGHT));

const outerSize = await currentWindow.outerSize();

const OUTER_WIDTH = outerSize.width - WINDOW_WIDTH;

await currentWindow.setPosition(
    new LogicalPosition(
        monitor.size.width - OUTER_WIDTH / 2 - WINDOW_WIDTH - PADDING,
        PADDING,
    ),
);
