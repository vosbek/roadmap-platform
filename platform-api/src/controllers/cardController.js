const db = require('../config/database');

async function getCards(req, res) {
  try {
    const result = await db.execute(
      `SELECT c.*, t.name as team_name 
       FROM cards c
       LEFT JOIN teams t ON c.team_id = t.id
       ORDER BY c.created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cards' });
  }
}

async function getCardById(req, res) {
  try {
    const result = await db.execute(
      `SELECT c.*, t.name as team_name 
       FROM cards c
       LEFT JOIN teams t ON c.team_id = t.id
       WHERE c.id = :id`,
      [req.params.id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Card not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch card' });
  }
}

async function createCard(req, res) {
  const {
    title,
    description,
    startDate,
    endDate,
    status,
    cardType,
    teamId,
    ownerId,
    lobId,
    fundingStatus,
    createdBy
  } = req.body;

  try {
    const result = await db.execute(
      `INSERT INTO cards (
        title, description, start_date, end_date, status, 
        card_type, team_id, owner_id, lob_id, funding_status, created_by
      ) VALUES (
        :title, :description, :startDate, :endDate, :status,
        :cardType, :teamId, :ownerId, :lobId, :fundingStatus, :createdBy
      ) RETURNING id INTO :id`,
      {
        title,
        description,
        startDate,
        endDate,
        status,
        cardType,
        teamId,
        ownerId,
        lobId,
        fundingStatus,
        createdBy
      },
      { autoCommit: true }
    );

    const newCardId = result.outBinds.id[0];
    res.status(201).json({ id: newCardId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create card' });
  }
}

async function updateCard(req, res) {
  const {
    title,
    description,
    startDate,
    endDate,
    status,
    cardType,
    teamId,
    ownerId,
    lobId,
    fundingStatus
  } = req.body;

  try {
    const result = await db.execute(
      `UPDATE cards SET
        title = :title,
        description = :description,
        start_date = :startDate,
        end_date = :endDate,
        status = :status,
        card_type = :cardType,
        team_id = :teamId,
        owner_id = :ownerId,
        lob_id = :lobId,
        funding_status = :fundingStatus,
        updated_at = CURRENT_TIMESTAMP
       WHERE id = :id
       RETURNING * INTO :returnRow`,
      {
        id: req.params.id,
        title,
        description,
        startDate,
        endDate,
        status,
        cardType,
        teamId,
        ownerId,
        lobId,
        fundingStatus
      },
      { autoCommit: true }
    );

    if (result.rowsAffected === 0) {
      res.status(404).json({ error: 'Card not found' });
    } else {
      res.json(result.outBinds.returnRow[0]);
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update card' });
  }
}

async function deleteCard(req, res) {
  try {
    const result = await db.execute(
      'DELETE FROM cards WHERE id = :id',
      [req.params.id],
      { autoCommit: true }
    );

    if (result.rowsAffected === 0) {
      res.status(404).json({ error: 'Card not found' });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete card' });
  }
}

async function getCardReferences(req, res) {
  try {
    const result = await db.execute(
      `SELECT cr.*, c.title as target_title, c.status as target_status
       FROM card_references cr
       JOIN cards c ON cr.target_card_id = c.id
       WHERE cr.source_card_id = :id`,
      [req.params.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch card references' });
  }
}

async function createCardReference(req, res) {
  const { targetCardId, referenceType, createdBy } = req.body;

  try {
    const result = await db.execute(
      `INSERT INTO card_references (
        source_card_id, target_card_id, reference_type, created_by
      ) VALUES (
        :sourceCardId, :targetCardId, :referenceType, :createdBy
      ) RETURNING id INTO :id`,
      {
        sourceCardId: req.params.id,
        targetCardId,
        referenceType,
        createdBy
      },
      { autoCommit: true }
    );

    const newReferenceId = result.outBinds.id[0];
    res.status(201).json({ 
      id: newReferenceId,
      sourceCardId: req.params.id,
      targetCardId,
      referenceType,
      createdBy
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create card reference' });
  }
}

module.exports = {
  getCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
  getCardReferences,
  createCardReference
};