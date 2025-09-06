import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import getPort from 'get-port';

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from './routes/auth';
import essayRoutes from './routes/essays';
import scoringRoutes from './routes/scoring';
import userRoutes from './routes/users';

// Import middleware
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

const app = express();
const PORT = process.env.PORT || 5001;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(morgan('combined'));
app.use(limiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Evalynn.ai IELTS Scoring Platform API is running successfully',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/essays', essayRoutes);
app.use('/api/scoring', scoringRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server with automatic port detection
const startServer = async () => {
  try {
    const originalPort = parseInt(process.env.PORT || '5001', 10);
    let currentPort = originalPort;
    let availablePort;
    let attempts = 0;
    const maxAttempts = 10; // Limit attempts to prevent infinite loop
    
    while (attempts < maxAttempts) {
      availablePort = await getPort({ port: currentPort });
      
      // If getPort returns the requested port, we found it
      if (availablePort === currentPort) {
        break;
      }
      
      // If getPort returns a different port, the requested port was taken
      // Try the next port in sequence
      currentPort++;
      attempts++;
    }
    
    if (attempts >= maxAttempts) {
      throw new Error(`Could not find an available port after ${maxAttempts} attempts starting from ${originalPort}`);
    }
    
    app.listen(availablePort, () => {
      if (availablePort !== originalPort) {
        console.log(`⚠️  Port ${originalPort} is in use, using port ${availablePort} instead.`);
      }
      console.log(`🚀 Server running on port ${availablePort}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`📊 Health check: http://localhost:${availablePort}/health`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
