import { Router } from 'express'
import * as bookCtrl from '../controllers/book.js'
import { decodeUserFromToken } from '../middleware/auth.js'


const router = Router()

router.post('/',  bookCtrl.create)
router.get('/', bookCtrl.index)
//router.delete('/:id',  sampleCtrl.remove)

router.use(decodeUserFromToken)
/*---------- Protected Routes ----------*/



export { router }
