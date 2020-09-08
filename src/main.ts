
import {app, BrowserWindow} from 'electron'
import * as markd from 'marked'

let win = null

export function render(text: string){
    return markd(text)
}

app.on('ready', () => {
    // 创建浏览器窗口。
    win = new BrowserWindow({
        width: 800,
        height: 600
    })

    const loadView = render('# Hello\n`code` is what **said**')
      
    var file = 'data:text/html;charset=UTF-8,' + encodeURIComponent(loadView);
    win.loadURL(file);
})
