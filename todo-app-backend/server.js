const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/database');
const todoRoutes = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5000;

//I connected to Mongo DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});