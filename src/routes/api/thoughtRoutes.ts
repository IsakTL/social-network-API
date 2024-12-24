import { Router } from 'express';
const router = Router();
import {
  getAllThoughts,
  getThoughtById,
  createThought,
  deleteThought,
} from '../../controllers/thoughtController.js';

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .delete(deleteThought);

export { router as thoughtRouter };
