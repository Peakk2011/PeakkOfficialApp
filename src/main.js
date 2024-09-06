// backend site js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const ipc = ipcMain;

// import { BrowserWindow } from 'electron-acrylic-window'; // ESM

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    minWidth: 417,
    minHeight: 725,
    title: "Peakkofficial",
    maximizable: true,
    titleBarStyle: 'hidden',
    // transparent: true,
    titleBarOverlay: {
      color: '#101011',
      symbolColor: '#fff',
      height: 50,
      width: 50,
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      experimentalFeatures: true,
    },
  });

  // ipc listener
  ipc.on('CloseTheApp', () => {
    app.quit();
  })

  ipc.on('MinimizeApp', () => {
    remote.getCurrentWindow().maximize()
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, './Frontend/index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// for windows taskbar apps
app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Create a new window'
  }
])

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
