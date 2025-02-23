// Get all cookies
document.cookie;

// Set cookie
document.cookie = 'name=james';

// Parse cookies into object
const cookies = document.cookie.split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value)
    }), {});
