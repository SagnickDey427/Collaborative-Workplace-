import express from "express" ;
const router = express.Router();
import { createDocumentController, getDocumentController, updateDocumentController } from "../controllers/documentControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

//Adding protectRoute middleware
router.use(protectRoute);

// GET all top-level documents
router.get('/', getDocumentController);

// POST a new document
router.post('/', createDocumentController);

// GET a specific document by ID
router.get('/:id', async (req, res) => {
  res.send(`Fetch document`);
});

// PATCH (update) a document
router.patch('/:id',updateDocumentController);

// DELETE a document (Soft delete)
router.delete('/:id', async (req, res) => {
  res.send(`Trash document`);
});

export default router;