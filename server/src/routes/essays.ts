import { Router } from 'express';
import { EssayController } from '../controllers/EssayController';

const router = Router();
const essayController = new EssayController();

// @route   POST /api/essays
// @desc    Submit essay for scoring
// @access  Private
router.post('/', essayController.submitEssay);

// @route   GET /api/essays
// @desc    Get user's essays
// @access  Private
router.get('/', essayController.getUserEssays);

// @route   GET /api/essays/:id
// @desc    Get essay by ID
// @access  Private
router.get('/:id', essayController.getEssayById);

// @route   DELETE /api/essays/:id
// @desc    Delete essay
// @access  Private
router.delete('/:id', essayController.deleteEssay);

export default router;
