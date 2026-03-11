const { currentMonitor } = window.__TAURI__.window;

async function getScreenSize() {
    try {
        // Get the monitor where the current window is displayed
        const monitor = await currentMonitor();

        if (monitor && monitor.size) {
            console.log(`Screen width: ${monitor.size.width}px`);
            console.log(`Screen height: ${monitor.size.height}px`);
            return monitor.size;
        } else {
            console.warn('Could not retrieve monitor size.');
            return null;
        }
    } catch (error) {
        console.error('Error getting screen size:', error);
        return null;
    }
}

// Example usage
getScreenSize();
console.log('Hi');
