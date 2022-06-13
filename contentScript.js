console.log('Improved Overleaf running');

// https://stackoverflow.com/questions/9515704/use-a-content-script-to-access-the-page-context-variables-and-functions
var s = document.createElement('script');
s.src = chrome.runtime.getURL('setGutter.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

// Cannot access window.setGutter(), run directly in WAR
// var delayInMilliseconds = 3000; //1 second

// setTimeout(function() {
//     window.setGutter();
// }, delayInMilliseconds);