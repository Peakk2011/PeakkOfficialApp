const { ipcRenderer } = require("electron")
const ipc = ipcRenderer

CloseApps.addEventListener('click', () => {
    ipc.send("CloseTheApp")
})