import { Router } from 'express';
import { ScoringController } from '../controllers/ScoringController';

const router = Router();
const scoringController = new ScoringController();

// @route   POST /api/scoring/score-essay
// @desc    Score an essay using AI
// @access  Private
router.post('/score-essay', scoringController.scoreEssay);

// @route   GET /api/scoring/history/:userId
// @desc    Get scoring history for a user
// @access  Private
router.get('/history/:userId', scoringController.getScoringHistory);

export default router;
