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
    titleBarOverlay: {
      color: '#101011',
      symbolColor: '#fff',
      height: 60,
      width: 60,
    },
    icon: __dirname + './img/PeakkSolid.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      experimentalFeatures: true,
    },
  });

  ipc.on('CloseTheApp', () => {
    app.quit();
  })

  ipc.on('MinimizeApp', () => {
    remote.getCurrentWindow().maximize()
  })


  mainWindow.loadFile(path.join(__dirname, './Frontend/index.html'));
};

ipc.on('OpenloginDialog', () => {
  // modalWindow.show();
  const OpenloginDialog = new BrowserWindow({
    modal: true,
    show: false,
    width: 420,
    height: 600,
    autoHideMenuBar: true,
    titleBarStyle: "hidden",
    resizable: false,
    maximizable: false,
    minimizable: false,
    fullscreenable: false,
    titleBarOverlay: {
      color: '#0a0a0a',
      symbolColor: '#fff',
      height: 45,
    },
    backgroundColor: '#0f0f0f',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      experimentalFeatures: true,
    },
  });
  OpenloginDialog.loadFile(path.join(__dirname, './Frontend/login.html'));
  OpenloginDialog.show();
})


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

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});