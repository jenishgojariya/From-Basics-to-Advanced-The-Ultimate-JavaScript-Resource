// User agent (not recommended)
const userAgent = window.navigator.userAgent;

// Feature detection
let isFetchSupported = true;
try {
    fetch;
} catch (error) {
    isFetchSupported = false;
}
