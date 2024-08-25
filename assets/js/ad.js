// Function to create and show the ad blocker overlay
function createAdBlockerOverlay() {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.id = 'adblock-overlay';
    overlay.style.display = 'none';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.color = '#fff';
    overlay.style.textAlign = 'center';
    overlay.style.padding = '20px';
    overlay.style.zIndex = '9999';

    // Create message content
    const message = document.createElement('div');
    message.innerHTML = `
        <h1>请关闭广告拦截器</h1>
        <p>为了继续访问我们的内容，请禁用广告拦截插件。</p>
        <button onclick="closeOverlay()">我已关闭广告拦截器</button>
    `;

    overlay.appendChild(message);
    document.body.appendChild(overlay);
}

// Function to check if ad blocker is present
function detectAdBlocker() {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);

    setTimeout(() => {
        if (testAd.offsetHeight === 0) {
            // Ad blocker detected, show overlay
            document.getElementById('adblock-overlay').style.display = 'block';
        } else {
            // No ad blocker, remove test element
            document.body.removeChild(testAd);
        }
    }, 100);
}

// Function to close the overlay
function closeOverlay() {
    document.getElementById('adblock-overlay').style.display = 'none';
}

// Initialize ad blocker detection and overlay
window.onload = function() {
    createAdBlockerOverlay();
    detectAdBlocker();
};
