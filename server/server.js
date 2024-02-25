const { config } = require("dotenv");
const express = require("express");
const multer = require('multer');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const cors = require("cors");
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const axios = require('axios');
const app = express();

config();
const connectDB = require("./config/db");
connectDB();
const user = require("./models/User");
user();
const PORT = process.env.PORT;


// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
// Default route

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.send(`Hello World`);
});

// Route for data analytics
app.post('/data-analytics', upload.single('file'), (req, res) => {
  if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
  }

  const formData = new FormData();
  const fileBlob = new Blob([req.file.buffer], { type: req.file.mimetype });
  formData.append('file', fileBlob, req.file.originalname);

  axios.post('http://localhost:5001/data-analytics', formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  })
  .then(response => {
      console.log('Analytics results:', response.data);
      res.json(response.data);
  })
  .catch(error => {
      console.error('Error performing data analytics:', error.response.data);
      res.status(500).json({ error: 'Error performing data analytics' });
  });
});


app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
