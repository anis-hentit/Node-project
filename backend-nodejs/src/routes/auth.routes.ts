import express from 'express';
import * as AuthController from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', (req, res) => {
    try {
        const { username, password, role } = req.body;
        const newUser = AuthController.register(username, password, role);
        res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});

router.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const user = AuthController.login(username, password);
        res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(401).send(error.message);
        } else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});


export default router;
