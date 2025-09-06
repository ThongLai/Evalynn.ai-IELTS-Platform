import { Request, Response } from 'express';
import { UserService } from '@/services/UserService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      // In a real app, get userId from JWT token
      const userId = 'current-user-id';
      
      const profile = await this.userService.getProfile(userId);

      res.status(200).json({
        success: true,
        data: profile,
        message: 'Profile retrieved successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to retrieve profile',
      });
    }
  };

  updateProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      // In a real app, get userId from JWT token
      const userId = 'current-user-id';
      const updateData = req.body;
      
      const updatedProfile = await this.userService.updateProfile(userId, updateData);

      res.status(200).json({
        success: true,
        data: updatedProfile,
        message: 'Profile updated successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to update profile',
      });
    }
  };
}
