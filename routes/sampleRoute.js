import { Router } from 'express'
import * as sampleCtrl from '../controllers/sample.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'


const router = Router()

router.use(decodeUserFromToken)
/*---------- Protected Routes ----------*/
router.post('/', checkAuth, sampleCtrl.create)
router.get('/', checkAuth, sampleCtrl.index)
router.delete('/:id', checkAuth, sampleCtrl.remove)


export { router }
