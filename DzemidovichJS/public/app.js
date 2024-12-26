document.addEventListener('DOMContentLoaded', () => {  
  const userList = document.getElementById('user-list');  
  const commentList = document.getElementById('comment-list');  
  const commentsSection = document.getElementById('comments-section');  

  async function loadUsers() {  
    const res = await fetch('/users?_limit=15');  
    const users = await res.json();  

    users.forEach(user => {  
      const li = document.createElement('li');  
      li.textContent = user.name;  
      li.dataset.userId = user.id;  
      li.addEventListener('click', () => loadComments(user.id));  
      userList.appendChild(li);  
    });  
  }  

  async function loadComments(userId) {  
    const res = await fetch('/comments?_limit=15');  
    const comments = await res.json();  

    const userComments = comments.filter(comment => comment.userId === parseInt(userId));  
    commentList.innerHTML = '';  

    userComments.forEach(comment => {  
      const li = document.createElement('li');  
      li.textContent = comment.text;  
      commentList.appendChild(li);  
    });  

    commentsSection.style.display = 'block';  
  }  

  loadUsers();  
});