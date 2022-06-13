function injectedFunction() {
    console.log('Set gutter ...')
    const editor = window._debug_editors[window._debug_editors.length -1];
    editor.renderer.setShowGutter(false);
    editor.renderer.$cursorLayer.setSmoothBlinking(true);
}

chrome.action.onClicked.addListener((tab) => {
    console.log('On clicked')
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: injectedFunction
    });
});