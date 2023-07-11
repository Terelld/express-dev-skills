const btn = document.querySelector('button');

// btn.addEventListener('click', function(evt){
//     console.log(evt)
// })

const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');

btn.addEventListener('click', function(evt) {
    const newCommentEl = document.createElement('li');
    const commentText = inputEl.value;
    newCommentEl.innerText = commentText;

    ulEl.append(newCommentEl);
});