import express from 'express';
import * as LessonController from '../controllers/lesson.controller';
import {lessons} from "../models/lesson.model";
import {getAllLessons} from "../controllers/lesson.controller";

const router = express.Router();

// Route to create a new lesson
router.post('/lesson', (req, res) => {
    try {
        const { title, content, courseId } = req.body;
        const lesson = LessonController.createLesson(title, content, courseId);
        res.status(201).json(lesson);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});

// Route to get a lesson by ID
router.get('/lesson/:id', (req, res) => {
    try {
        const lesson = LessonController.getLesson(req.params.id);
        if (lesson) {
            res.json(lesson);
        } else {
            res.status(404).send('Lesson not found');
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});



// Additional import may be needed if you have a separate storage for lessons.
// Assuming lessons are stored in a 'lessons' object.

router.get('/lessons', (req, res) => {
    try {
        const allLessons = getAllLessons();
        res.json(allLessons);
    } catch (error) {
        res.status(500).send('An unexpected error occurred');
    }
});



export default router;
