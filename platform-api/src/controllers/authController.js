const db = require('../config/database');

async function login(req, res) {
    try {
        // For local testing, we'll just fetch the user by email
        const result = await db.execute(
            `SELECT u.*, t.name as team_name, o.name as org_name
             FROM users u
             JOIN teams t ON u.team_id = t.id
             JOIN organizations o ON t.org_id = o.id
             WHERE u.email = :email`,
            [req.body.email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'User not found' });
        }

        // In a real app, we'd verify the password here
        const user = result.rows[0];
        
        res.json({
            user,
            token: 'test-token' // In production, this would be a real JWT
        });
    } catch (err) {
        res.status(500).json({ error: 'Login failed' });
    }
}

module.exports = {
    login
};