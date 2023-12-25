import express from 'express';
import * as CourseController from '../controllers/course.controller';
import { courses } from '../models/course.model';

const router = express.Router();

router.post('/course', (req, res) => {
    const { title, description, teacherId } = req.body;
    const course = CourseController.createCourse(title, description, teacherId);
    res.status(201).json(course);
});

router.get('/course/:id', (req, res) => {
    const course = CourseController.getCourse(req.params.id);
    if (course) {
        res.json(course);
    } else {
        res.status(404).send('Course not found');
    }
});

// Add to your course routes in the backend
router.get('/courses', (req, res) => {
    const allCourses = CourseController.getAllCourses(); // Assuming 'courses' is your in-memory store
    res.json(allCourses);
});

export default router;
