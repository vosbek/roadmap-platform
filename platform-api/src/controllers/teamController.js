const db = require('../config/database');

async function getTeams(req, res) {
  try {
    const result = await db.execute(
      'SELECT * FROM teams ORDER BY name'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
}

async function getTeamById(req, res) {
  try {
    const result = await db.execute(
      'SELECT * FROM teams WHERE id = :id',
      [req.params.id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Team not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch team' });
  }
}

module.exports = {
  getTeams,
  getTeamById
};