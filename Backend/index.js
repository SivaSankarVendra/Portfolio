const connectToMongoDB = require("./db");
const express = require('express'); 
let cors = require('cors')
require('dotenv').config()
const Message = require('./model/message'); 
connectToMongoDB();

const app = express()
const port = process.env.Port

//midware

app.use(cors())
app.use(express.json())

app.post('/submit', async (req, res) => {
    const { userName, email, message } = req.body;
  
    // Basic validation
    if (!userName || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }
  
    try {
      // Create a new message instance
      const newMessage = new Message({ userName, email, message });
  
      // Save the message to the database
      await newMessage.save();
  
      res.status(201).json({ message: 'Message received successfully' });
    } catch (err) {
      console.error('Error saving message to the database', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(port, () => {
    console.log(`portfolio backend listening on port http://localhost:${port}`)
  })