const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
require('electron-reload')(__dirname);

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1300,
    height: 800
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.on('close', () => {
  	win = null;
  })
}

app.on('ready', createWindow);
