import { Router } from 'express'
import * as clinicianCtrl from '../controllers/clinician.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'


const router = Router()

router.post('/', clinicianCtrl.create)
router.get('/', clinicianCtrl.index)
router.delete('/:id', clinicianCtrl.remove)

router.use(decodeUserFromToken)
/*---------- Protected Routes ----------*/



export { router }
