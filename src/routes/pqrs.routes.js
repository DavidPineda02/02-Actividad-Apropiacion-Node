import express from 'express';
import { getAllPQRS, getPQRSById, createPQRS, updatePQRS, deletePQRS } from '../controllers/index.controller.js';

const router = express.Router();

router.get('/get', getAllPQRS);
router.get('/get/:id', getPQRSById);
router.post('/post', createPQRS);
router.put('/put/:id', updatePQRS);
router.delete('/delete/:id', deletePQRS);

export default router;