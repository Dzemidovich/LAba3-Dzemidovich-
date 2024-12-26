// App.js  
import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';  

const UsersList = () => {  
  const [users, setUsers] = useState([]);  

  useEffect(() => {  
    const fetchUsers = async () => {  
      const response = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=15');  
      setUsers(response.data);  
    };  
    fetchUsers();  
  }, []);  

  return (  
    <div>  
      <h1>Users</h1>  
      <ul>  
        {users.map((user) => (  
          <li key={user.id}>  
            <Link to={`/user/${user.id}`}>{user.name}</Link>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

const UserComments = ({ match }) => {  
  const [comments, setComments] = useState([]);  

  useEffect(() => {  
    const fetchComments = async () => {  
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=15');  
      setComments(response.data.filter((comment) => comment.postId === parseInt(match.params.id)));  
    };  
    fetchComments();  
  }, [match.params.id]);  

  return (  
    <div>  
      <h1>Comments</h1>  
      <ul>  
        {comments.map((comment) => (  
          <li key={comment.id}>  
            <h3>{comment.name}</h3>  
            <p>{comment.email}</p>  
            <p>{comment.body}</p>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

const App = () => {  
  return (  
    <Router>  
      <div>  
        <nav>  
          <ul>  
            <li>  
              <Link to="/">Users</Link>  
            </li>  
          </ul>  
        </nav>  

        <Switch>  
          <Route exact path="/" component={UsersList} />  
          <Route path="/user/:id" component={UserComments} />  
        </Switch>  
      </div>  
    </Router>  
  );  
};  

export default App;