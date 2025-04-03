/** @format */

// Import necessary modules
import { Router } from 'express';

// Import routers
import healthRouter from './health.routes';
import indexRouter from './index.routes';

// Create a new router instance
const router = Router();

// Endpoints
router.use('/', indexRouter);
router.use('/health', healthRouter);

// Export the router
export default router;
