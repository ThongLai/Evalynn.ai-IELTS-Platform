import { Request, Response } from 'express';
import { ScoringService } from '@/services/ScoringService';

export class ScoringController {
  private scoringService: ScoringService;

  constructor() {
    this.scoringService = new ScoringService();
  }

  scoreEssay = async (req: Request, res: Response): Promise<void> => {
    try {
      const { essayText, taskType, prompt } = req.body;
      
      const scores = await this.scoringService.scoreEssay({
        essayText,
        taskType,
        prompt,
      });

      res.status(200).json({
        success: true,
        data: scores,
        message: 'Essay scored successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Scoring failed',
      });
    }
  };

  getScoringHistory = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      
      const history = await this.scoringService.getScoringHistory(userId);

      res.status(200).json({
        success: true,
        data: history,
        message: 'Scoring history retrieved successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to retrieve scoring history',
      });
    }
  };
}
