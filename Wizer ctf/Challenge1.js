const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const SECRETKEY = process.env.SECRETKEY;

// Middleware to verify JWT token
// This API will be used by various microservices. These all pass in the authorization token.
// However the token may be in various different payloads.
// That's why we've decided to allow all JWT algorithms to be used.
app.use((req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    // Verify the token using the secret key and support all JWT algorithms
    const decoded = jwt.verify(token, SECRETKEY, { algorithms: ['HS256', 'HS384', 'HS512', 'RS256', 'RS384', 
                                                                'RS512', 'ES256', 'NONE', 'ES384', 'ES512',
                                                                'PS256', 'PS384', 'PS512'] });
    
    req.auth = decoded;                                                                                                                      
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token invalid' });
  }
});
    
// API route protected by our authentication middleware
app.post('/flag', (req, res) => {
  if (req.auth.access.includes('flag')) {
    res.json({ message: 'If you can make the server return this message, then you've solved the challenge!'});
  } else {
    res.status(403).json({ message: '🚨 🚨 🚨 You've been caught by the access control police! 🚓 🚓 🚓' })
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
