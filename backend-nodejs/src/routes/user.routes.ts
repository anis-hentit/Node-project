import express from 'express';
import * as UserController from '../controllers/user.controller';

const router = express.Router();

router.get('/users', (req, res) => {
    const allUsers = UserController.getAllUsers();
    res.json(allUsers);
});


router.get('/user/:id', (req, res) => {
    try {
        const user = UserController.getUserById(req.params.id);
        res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send(error.message);
        } else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});


router.put('/user/:id', (req, res) => {
    try {
        const updatedUser = UserController.updateUser(req.params.id, req.body);
        res.json(updatedUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send(error.message);
        } else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});


router.get('/user/:id/courses', (req, res) => {
    try {
        const enrolledCourses = UserController.getEnrolledCourses(req.params.id);
        res.json(enrolledCourses);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send(error.message);
        } else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});




export default router;
