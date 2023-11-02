import { Router } from 'express'
import * as authorCtrl from '../controllers/author.js'
import { decodeUserFromToken } from '../middleware/auth.js'


const router = Router()

router.post('/',  authorCtrl.create)
router.get('/', authorCtrl.index)
//router.delete('/:id',  sampleCtrl.remove)

router.use(decodeUserFromToken)
/*---------- Protected Routes ----------*/



export { router }
