import { Request, Response } from 'express';
import { EssayService } from '@/services/EssayService';

export class EssayController {
  private essayService: EssayService;

  constructor() {
    this.essayService = new EssayService();
  }

  submitEssay = async (req: Request, res: Response): Promise<void> => {
    try {
      const { content, prompt, taskType } = req.body;
      // In a real app, get userId from JWT token
      const userId = 'current-user-id';
      
      const essay = await this.essayService.submitEssay({
        content,
        prompt,
        taskType,
        userId,
      });

      res.status(201).json({
        success: true,
        data: essay,
        message: 'Essay submitted successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit essay',
      });
    }
  };

  getUserEssays = async (req: Request, res: Response): Promise<void> => {
    try {
      // In a real app, get userId from JWT token
      const userId = 'current-user-id';
      
      const essays = await this.essayService.getUserEssays(userId);

      res.status(200).json({
        success: true,
        data: essays,
        message: 'Essays retrieved successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to retrieve essays',
      });
    }
  };

  getEssayById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      
      const essay = await this.essayService.getEssayById(id);

      res.status(200).json({
        success: true,
        data: essay,
        message: 'Essay retrieved successfully',
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error instanceof Error ? error.message : 'Essay not found',
      });
    }
  };

  deleteEssay = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      
      await this.essayService.deleteEssay(id);

      res.status(200).json({
        success: true,
        message: 'Essay deleted successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to delete essay',
      });
    }
  };
}
