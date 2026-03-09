import { createModel } from "../../models/index.models.js";

export const createPQRS = (req, res) => {
    const { nombre } = req.body;
    try {
        const data = createModel(nombre);
        res.status(201).json({
            mensaje: "PQRS Creada - Simulación SQL",
            data
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear la PQRS"
        });
    }
};
