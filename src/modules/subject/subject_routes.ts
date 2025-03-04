// src/routes/subject_routes.ts
import express from 'express';
import {
  createSubjectHandler,
  getAllSubjectsHandler,
  getSubjectByIdHandler,
  updateSubjectHandler,
  deleteSubjectHandler,
  getUsersBySubjectHandler
} from '../subject/subject_controller.js';

const router = express.Router();


router.post('/subjects', createSubjectHandler);

router.get('/subjects', getAllSubjectsHandler);

router.get('/subjects/:id', getSubjectByIdHandler);

router.put('/subjects/:id', updateSubjectHandler);

router.delete('/subjects/:id', deleteSubjectHandler);

router.get('/subjects/GetUsers/:id', getUsersBySubjectHandler);

export default router;
