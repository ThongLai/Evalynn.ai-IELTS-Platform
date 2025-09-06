import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  register = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password, firstName, lastName } = req.body;
      
      const result = await this.authService.register({
        email,
        password,
        firstName,
        lastName,
      });

      res.status(201).json({
        success: true,
        data: result,
        message: 'User registered successfully',
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : 'Registration failed',
      });
    }
  };

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      
      const result = await this.authService.login(email, password);

      res.status(200).json({
        success: true,
        data: result,
        message: 'Login successful',
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error instanceof Error ? error.message : 'Login failed',
      });
    }
  };

  logout = async (req: Request, res: Response): Promise<void> => {
    try {
      // Implement logout logic (e.g., invalidate token)
      res.status(200).json({
        success: true,
        message: 'Logout successful',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Logout failed',
      });
    }
  };

  getMe = async (req: Request, res: Response): Promise<void> => {
    try {
      // This would typically get user info from JWT token
      // For now, returning placeholder response
      res.status(200).json({
        success: true,
        data: {
          id: 'user-id',
          email: 'user@example.com',
          firstName: 'John',
          lastName: 'Doe',
        },
        message: 'User data retrieved successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to get user data',
      });
    }
  };
}
