# Evalynn.ai - IELTS AI Platform

## About Evalynn.ai

A modern AI platform that provides instant, detailed IELTS assessment. Using advanced language models that were trained and fine-tuned on a big dataset of IELTS essays, feedbacks, and the official assessment criteria ***(still in experimental phase)***.

Evalynn delivers accurate band scores across all four IELTS criteria while offering personalised feedback to help test takers improve their skills.

### Current Features

- **Automated Instant AI Scoring** - Get IELTS band scores in seconds across all four criteria
- **Detailed Feedback** - Comprehensive analysis with strengths and improvement suggestions
- **Progress Tracking** - Historical performance analysis and improvement insights
- **Multiple Task Types** - Support for many IELTS task types
- **Responsive Design** - Optimised for desktop, tablet, and mobile devices

## Project Structure

This project is organized as a monorepo with separate client and server applications:

```
Evalynn.ai-IELTS-Platform/
├── client/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/           # Next.js app directory
│   │   ├── components/    # React components
│   │   ├── lib/          # Utility functions
│   │   └── hooks/        # Custom React hooks
│   ├── public/           # Static assets
│   └── package.json
├── server/                # Express.js backend application
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   ├── models/       # Data models
│   │   ├── middleware/   # Custom middleware
│   │   └── utils/        # Utility functions
│   └── package.json
└── README.md
```

## Technology Stack
- Next.js
- Express.js