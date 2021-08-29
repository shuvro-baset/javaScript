const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => commentsDetails(data))
}
// direct function calling if I need all the data when page is loaded. no onclick button.
loadComments();


const commentsDetails = comments => {
    const commentsDiv = document.getElementById('comments');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('comment')
        div.innerHTML = `
            <p>${comment.id}</p>
            <p>${comment.name}</p>
            <button onclick="loadCommentsById('${comment.id}')">Details</button>
        `;
        commentsDiv.appendChild(div);
    });
}

const loadCommentsById = id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCommentDetail(data));
    
}

const displayCommentDetail = comment => {
    console.log(comment);
    const commentDiv = document.getElementById('comment-details');
    commentDiv.innerHTML = `
        <h5>${comment.id}</h4>
        <p>population: ${comment.name}</p>
        <p>body: ${comment.body}</p>
    `
}