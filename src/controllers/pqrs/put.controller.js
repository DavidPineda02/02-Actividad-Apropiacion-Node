import { updateModel } from "../../models/index.models.js";

export const updatePQRS = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        const data = updateModel(id, nombre);
        res.status(200).json({
            mensaje: "PQRS Actualizada - Simulación SQL",
            data
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar la PQRS"
        });
    }
};
