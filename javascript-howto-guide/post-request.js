fetch('https://myurl.com/', { method: 'POST' })
    .then(result => result.json())
    .then(data => console.log(data));
