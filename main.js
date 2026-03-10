const { app, BrowserWindow, screen } = require('electron');

const createWindow = () => {
    const windowWidth = 300;
    const windowHeight = 205;
    const paddingX = 5;
    const paddingY = 5;

    const primaryDisplay = screen.getPrimaryDisplay();
    const { width: screenWidth } = primaryDisplay.workAreaSize;

    const win = new BrowserWindow({
        autoHideMenuBar: true,
        width: windowWidth,
        height: windowHeight,
        x: screenWidth - paddingX - windowWidth,
        y: paddingY,
        resizable: false,
        frame: false,
        skipTaskbar: true,
    });

    win.loadFile('index.html');
};

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// Open a window if none are open
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
