const db = require('../config/database');

async function getOrganizations(req, res) {
  try {
    const result = await db.execute(
      'SELECT * FROM organizations ORDER BY name'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch organizations' });
  }
}

async function getOrganizationById(req, res) {
  try {
    const result = await db.execute(
      'SELECT * FROM organizations WHERE id = :id',
      [req.params.id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Organization not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch organization' });
  }
}

module.exports = {
  getOrganizations,
  getOrganizationById
};