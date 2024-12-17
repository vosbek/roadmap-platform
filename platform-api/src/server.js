require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/database');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/teams', require('./routes/teams'));
app.use('/api/organizations', require('./routes/organizations'));
app.use('/api/cards', require('./routes/cards'));
app.use('/api/auth', require('./routes/auth'));
// Initialize database and start server
async function startup() {
  try {
    await db.initialize();
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

// Shutdown handling
process.on('SIGTERM', async () => {
  console.log('Shutting down...');
  await db.closePool();
  process.exit(0);
});

startup();