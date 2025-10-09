import { Router } from 'express' 
import { loginUserController, registerUserController, verifyEmailController, logoutController } from '../controllers/user.controller.js';
import auth from '../middleware/auth.js' ;

const userRouter = Router()
userRouter.post('/register' ,registerUserController)
userRouter.post('/verifyEmail', verifyEmailController)
userRouter.post('/login', loginUserController)
userRouter.get('/logout', auth,logoutController)

export default userRouter ;