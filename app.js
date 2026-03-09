import express from 'express';
import pqrsRoutes from './src/routes/pqrs.routes.js';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use("/pqrs", pqrsRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});