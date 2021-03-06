'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({width: 1000, height: 700});
  mainWindow.loadURL('file://' + __dirname + '/public/build/index.html');
  // mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});