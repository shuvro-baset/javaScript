function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => commentsDetails(data))
}
// direct function calling if I need all the data when page is loaded. no onclick button.
loadComments();
function commentsDetails(comments){
    const commentsDiv = document.getElementById('comments');
    for(const d of comments){
        const h4 =document.createElement('h4');
        const p = document.createElement('p');
        h4.innerText = d.name;
        p.innerText = d.body;
        commentsDiv.appendChild(h4);
        commentsDiv.appendChild(p);
    }
}