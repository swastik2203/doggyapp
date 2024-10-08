import express from "express";
import {registerController,loginController, testcontroller, forgotpasswordController, updateProfileController, getOrdersController, orderStatusController, getAllOrdersController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN|| POST
router.post('/login',loginController);

//ForgotPassword || POST
router.post('/forgot-password',forgotpasswordController)

//test routes
router.get('/test', requireSignIn, isAdmin, testcontroller)

//protected user route auth
router.get('/user-auth',requireSignIn,(req,res) => {
    res.status(200).send({ok: true});
})

//protected Admin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res) => {
    res.status(200).send({ok: true});
})

//update profile
router.put('/profile',requireSignIn,updateProfileController)

//orders
router.get('/orders',requireSignIn,getOrdersController)

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router