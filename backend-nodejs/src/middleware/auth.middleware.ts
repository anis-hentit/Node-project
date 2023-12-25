import { Request, Response, NextFunction } from 'express';
import { users } from '../models/user.model';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.headers['user-id'];

    if (!userId || !users[userId as string]) {
        res.status(401).send('Unauthorized');
        return;
    }

    req.user = users[userId as string];
    next();
};

// Middleware to check if the user is a teacher
function checkIsTeacher(req: Request, res: Response, next: NextFunction) {
    // Directly check the role of req.user set by the authenticate middleware
    if (req.user && req.user.role === 'teacher') {
        next();
    } else {
        res.status(403).send('You must be a teacher to perform this action');
    }
}