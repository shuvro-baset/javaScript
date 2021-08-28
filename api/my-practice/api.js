fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => console.log(data[0].body));