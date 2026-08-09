const { getCurrentWindow, currentMonitor } = window.__TAURI__.window;
const { LogicalPosition, LogicalSize } = window.__TAURI__.dpi;

const monitor = await currentMonitor();
const currentWindow = await getCurrentWindow();

const outerSize = await currentWindow.outerSize();

const WINDOW_WIDTH_PERCENTAGE = 0.16, // 0.15
    WINDOW_HEIGHT_PERCENTAGE = 0.2; // 0.18

const WINDOW_WIDTH = monitor.size.width * WINDOW_WIDTH_PERCENTAGE,
    WINDOW_HEIGHT = monitor.size.height * WINDOW_HEIGHT_PERCENTAGE,
    PADDING = 5;

await currentWindow.setSize(new LogicalSize(WINDOW_WIDTH, WINDOW_HEIGHT));

const OUTER_WIDTH = outerSize.width - WINDOW_WIDTH;
const MONITOR_RATIO = monitor.size.width / monitor.size.height;

const exitBtn = document.querySelector('#exit');
exitBtn.addEventListener('click', async function () {
    currentWindow.destroy();
});

await currentWindow.setPosition(
    new LogicalPosition(
        monitor.size.width - OUTER_WIDTH / 2 - WINDOW_WIDTH - PADDING,
        PADDING,
    ),
);
