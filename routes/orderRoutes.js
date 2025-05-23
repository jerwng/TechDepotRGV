import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from '../controllers/orderController.js';
import { verifyTokenThenContinue } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post('/',verifyTokenThenContinue, createOrder);           // Create new order
router.get('/', getAllOrders);           // Get all orders
router.get('/:id', getOrderById);        // Get single order by ID
router.put('/:id', updateOrder);         // Update an order
router.delete('/:id', deleteOrder);      // Delete an order

export default router;
