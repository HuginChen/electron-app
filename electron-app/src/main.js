'use strict'

const election = require('electron')

// Module to control application file
const app = election.app
// Module to create native browser windwo
const BrowserWindow = election.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('close', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
        console.log('this window closed...')
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        console.log('window-all-closed 111')
        app.quit()
    }
    console.log('window-all-closed 222')
})

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        console.log('create new window')
        createWindow()
    }
})

