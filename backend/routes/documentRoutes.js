import express from "express" ;
const router = express.Router();

// GET all top-level documents
router.get('/', async (req, res) => {
  res.send('Fetch all top-level documents');
});

// POST a new document
router.post('/', async (req, res) => {
  res.send('Create a new document');
});

// GET a specific document by ID
router.get('/:id', async (req, res) => {
  res.send(`Fetch document`);
});

// PATCH (update) a document
router.patch('/:id', async (req, res) => {
  res.send(`Update document`);
});

// DELETE a document (Soft delete)
router.delete('/:id', async (req, res) => {
  res.send(`Trash document`);
});

export default router;