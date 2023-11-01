import { Router } from 'express'
import * as adminAuthCtrl from '../controllers/adminAuth.js'
import { checkAuth, decodeUserFromToken } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/signup', adminAuthCtrl.signup)
router.post('/login', adminAuthCtrl.login)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/change-password', checkAuth, adminAuthCtrl.changePassword)

export { router }
