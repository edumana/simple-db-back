// Import npm packages
import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'

// Connect to MongoDB with mongoose
import './config/database.js'

// Import Routes
import { router as sampleRouter } from './routes/sampleRoute.js'
import { router as adminAuthRouter} from './routes/adminAuth.js'

// Create express app
const app = express();

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/v1/sample', sampleRouter)
app.use('/api/v1/admin', adminAuthRouter)

// Handle errors
app.use(function (req, res, next) {
    res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({ err: err.message })
})

export { app }