import { Router } from 'express'
import * as sampleCtrl from '../controllers/sample.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/', sampleCtrl.create)
router.get('/', sampleCtrl.index)
router.delete('/:id', sampleCtrl.remove)


export { router }
