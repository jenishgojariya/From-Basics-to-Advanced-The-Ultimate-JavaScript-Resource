// Simple get
const params = new URLSearchParams(window.location.search);
const search = params.get('search');

// All params as object
const allParams = Array.from(params.keys())
    .reduce((acc, key) => ({ ...acc, [key]: params.get(key) }), {});
