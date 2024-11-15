const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

dotenv.config(); // Load environment variables from .env file

// Import routes
const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/car');
const docsRoutes = require('./routes/doc');
const connectDB = require('./config/db');

// Initialize the app
const app = express();

// Middleware
app.use(cors(
    {
        origin: ["https://deploy-mern-lwhq.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
)); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve images statically



// Routes
app.use('/auth', authRoutes); // User authentication routes
app.use('/cars', carRoutes); // Car management routes
app.use('/api/docs', docsRoutes); // Swagger documentation route

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Car Management API',
            version: '1.0.0',
            description: 'API documentation for Car Management Application'
        },
        servers: [
            {
                url: 'http://localhost:5000', // Change to deployed URL in production
                description: 'Development server'
            }
        ]
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Start the server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
