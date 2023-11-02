import { Router } from 'express'
import * as bookingCtrl from '../controllers/booking.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'


const router = Router()

router.post('/', bookingCtrl.create)
router.get('/', bookingCtrl.index)

router.use(decodeUserFromToken)
/*---------- Protected Routes ----------*/



export { router }
