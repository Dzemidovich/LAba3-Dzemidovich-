const express = require('express');  
const path = require('path');  
const app = express();  
const port = process.env.PORT || 3000;  

// Serve the React app  
app.use(express.static(path.join(__dirname, 'build')));  

// Handle API requests  
app.get('/api/users', (req, res) => {  
  // Fetch users data and return it  
  // ...  
});  

app.get('/api/comments', (req, res) => {  
  // Fetch comments data and return it  
  // ...  
});  

app.get('*', (req, res) => {  
  res.sendFile(path.join(__dirname, 'build', 'index.html'));  
});  

app.listen(port, () => {  
  console.log(`Server is running on port ${port}`);  
});