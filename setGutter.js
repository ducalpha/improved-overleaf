(function setGutter() {
    console.log('set_gutter.js');
    const editor = window._debug_editors[window._debug_editors.length -1];
    editor.renderer.setShowGutter(false);
    editor.renderer.$cursorLayer.setSmoothBlinking(true);
})();
