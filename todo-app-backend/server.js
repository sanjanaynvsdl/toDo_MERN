// const express = require('express');
// const cors = require('cors');
// const { connectDB } = require('./config/database');
// const todoRoutes = require('./routes/todos');
// const authRoutes = require('./routes/auth');

// const app = express();
// const PORT=5000;

// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use('/auth', authRoutes);
// app.use('/todos', todoRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/database');
const todoRoutes = require('./routes/todos');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
