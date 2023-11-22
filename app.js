const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

try{
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});
}

catch(error){
    console.log("error",error);
}

// Serve static files (like CSS and JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
