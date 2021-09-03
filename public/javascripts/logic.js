const fetchRequest = (endpoint, method, body) => {
    return fetch(endpoint, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};