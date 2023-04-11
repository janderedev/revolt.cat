import owoify from 'https://esm.sh/owoify-js';

// Thank you Stack Overflow
const observeDOM = (() => {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  
    return (obj, callback) => {
        if (!obj || obj.nodeType !== 1) return; 
  
        if (MutationObserver) {
            // define a new observer
            const mutationObserver = new MutationObserver(callback);
  
            // have the observer observe for changes in children
            mutationObserver.observe(obj, { childList:true, subtree:true });
            return mutationObserver;
        }
      
        // browser support fallback
        else if (window.addEventListener) {
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();

observeDOM(document.body, (mutations) => {
    const addedNodes = [];
    for (const record of mutations) {
        addedNodes.push(...record.addedNodes);
    }

    for (const node of addedNodes) {
        owofyNode(node);
    }
});

/**
 * 
 * @param {HTMLElement} node 
 */
function owofyNode(node) {
    if (node.nodeType == Node.TEXT_NODE && node.nodeValue) {
        node.nodeValue = owoify(node.nodeValue, 'uwu');
    }
    else for (const child of node.childNodes) {
        owofyNode(child);
    }
}

owofyNode(document.body);
