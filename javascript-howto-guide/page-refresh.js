// Basic reload
window.location.reload();

// Bypass cache
window.location.reload(true);

// Delayed reload (5 seconds)
setTimeout(() => {
    window.location.reload(true);
}, 5000);
