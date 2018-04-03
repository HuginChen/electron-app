
const election = require('electron')

const {app, BrowserWindow} = election

const path = require('path')
const url = require('url')

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600})

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}
