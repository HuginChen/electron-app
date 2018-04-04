
const  shell = require('electron').shell

const injectCSS = `
div.main {
    height: 100% !important;
    min-height: 0 !important;
    padding-top: 0 !important;
}
div.main_inner {
    max-width: none; !important;
    min-width: 0 !important;
}
div.message_empty {
    margin-top: 50px;
}
div.copyright {
    display: none !important;
}
a.web_wechat_screencut {
    display: none !important;
}`

function getParameterByName(url, name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")
}

onload = () => {
    console.log(e, "\n", e.url)
    var url = getParameterByName(e.url, 'requrl')
    if (url.length > 1) {
        shell.openExternal(url);
    } else {
        shell.openExternal(e.url)
    }
}