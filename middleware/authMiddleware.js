const jwt = require('jsonwebtoken');

const verifyToken = (roles) => {
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];

        // Check if authorization header exists
        if (!authHeader) {
            return res.status(403).json({ message: 'No token provided' });
        }

        // Split the "Bearer" part and get the token
        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(403).json({ message: 'No token provided' });
        }

        // Verify the token
        jwt.verify(token, 'secretKey', (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            req.user = decoded;

            if (roles.includes(decoded.role)) {
                return next();
            } else {
                return res.status(403).json({ message: 'Access denied. Insufficient role.' });
            }
        });
    };
};

module.exports = verifyToken;
