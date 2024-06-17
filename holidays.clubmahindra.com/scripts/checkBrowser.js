
function get_browser() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: 'IE', version: (tem[1] || '') };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bEdg\/(\d+)/)
        if (tem != null) { return { name: 'Edge(Chromium)', version: tem[1] }; }
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) { return { name: 'Opera', version: tem[1] }; }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
    return {
        name: M[0],
        version: M[1]
    };
}

var browser = get_browser();

let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
// let isIOS1 = userAgent.include("iPhone" ||"iPad"||"iPod")

if (navigator.userAgent.includes('wv')) {
    console.log("android web view")
}

else if (isIOS == true) {
        // Ios webview
        console.log("iphone web view")

}
// else if (isIOS1 == true) {
//     // Ios webview
//     console.log("iphone web view")

// }
else {

    if (browser.name == 'Chrome' && browser.version < 65) {
        window.location.replace('/outdated.html')
    }
    else if (browser.name == 'Edge(Chromium)' && browser.version < 85) {
        window.location.replace('/outdated.html')

    }

    else if (browser.name == 'Firefox' && browser.version < 68) {
        window.location.replace('/outdated.html')

    }
    else if (browser.name == 'Opera' && browser.version < 52) {
        window.location.replace('/outdated.html')

    }
    else if (browser.name == 'Safari' && browser.version < 14) {
        window.location.replace('/outdated.html')

    }
    else if (browser.name == 'MSIE') {
        window.location.replace('/outdated.html')
    }
    else if (browser.name == 'IE') {
        window.location.replace('/outdated.html')
    }
    else {
        // console.log("")
    }
}


