// Import npm packages
import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'

// Connect to MongoDB with mongoose
import './config/database.js'

// Import Routes
import { router as sampleRouter } from './routes/sampleRoute.js'
import { router as adminAuthRouter} from './routes/adminAuth.js'
import { router as clinicianRouter} from './routes/clinicianRoute.js'
import { router as bookingRouter} from './routes/bookingRoute.js'
import { router as authorRouter} from './routes/authorRoute.js'
import { router as bookRouter} from './routes/bookRoute.js'

// Create express app
const app = express();

// Middleware
app.use(cors())
app.use(express.json())


// Interview Routes
app.use('api/v1/author', authorRouter)
app.use('api/v1/book', bookRouter)
app.use('api/v1/clinician', clinicianRouter)
app.use('api/v1/booking', bookingRouter)

// Test Routes
app.use('api/v1/sample', sampleRouter)
app.use('api/v1/admin', adminAuthRouter)

// Handle errors
app.use(function (req, res, next) {
    res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({ err: err.message })
})

export { app }