const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Production-ready middleware
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1); // Trust first proxy for Heroku
}

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

/**
 * Device detection utility
 * @param {Object} req - Express request object
 * @returns {string} Device type: 'desktop', 'tablet', or 'mobile'
 */
function detect(req) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  if (/ipad|tablet/.test(ua)) return 'tablet';
  if (/mobi|iphone|android/.test(ua)) return 'mobile';
  return 'desktop';
}

const desktopDist = path.join(__dirname, '..', 'client', 'dist');
const mobileDist = path.join(__dirname, '..', 'client-mobile', 'dist');

// API endpoints
app.get('/device', (req, res) => {
  const device = detect(req);
  res.json({ device });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  
  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      required: ['name', 'email', 'message']
    });
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  // In a real application, you would:
  // 1. Sanitize input
  // 2. Send email via service like SendGrid, Mailgun, etc.
  // 3. Store in database
  // 4. Return appropriate response
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. I will get back to you soon!' 
  });
});

// Device-aware static file serving and routing
app.get('*', (req, res, next) => {
  // Skip for API routes
  if (req.path.startsWith('/api') || req.path === '/device') {
    return next();
  }
  
  const device = detect(req);
  
  // Serve static assets based on device type
  if (req.path.includes('.') && !req.path.endsWith('.html')) {
    const staticPath = (device === 'mobile' || device === 'tablet') ? mobileDist : desktopDist;
    return express.static(staticPath)(req, res, next);
  }
  
  // Serve appropriate HTML based on device type
  try {
    const htmlPath = (device === 'mobile' || device === 'tablet') 
      ? path.join(mobileDist, 'index.html')
      : path.join(desktopDist, 'index.html');
    
    return res.sendFile(htmlPath);
  } catch (error) {
    console.error('Error serving file:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Portfolio server running on port ${PORT}`);
  console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown handling
const gracefulShutdown = (signal) => {
  console.log(`\n${signal} received. Starting graceful shutdown...`);
  server.close((err) => {
    if (err) {
      console.error('Error during server shutdown:', err);
      process.exit(1);
    }
    console.log('Server closed successfully.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

module.exports = app;