/**
 * Express router providing user-related routes.
 * @module routers/health
 * @requires express
 */

/**
 * Express framework module
 * @external express
 * @see {@link https://expressjs.com/|Express Documentation}
 * @description This module is used to create and manage an Express application.
 */
import { Router } from 'express';

// Import required controller
import { getLiveness, getReadiness } from '@/controllers/health-controller';

/**
 * Express router to mount user related functions on.
 */
const router = Router();

/**
 * Place your router methods and endpoints below.
 */
router.get('/liveness', getLiveness);
router.get('/readiness', getReadiness);

// Export router to be used in other parts of the API
export default router;
