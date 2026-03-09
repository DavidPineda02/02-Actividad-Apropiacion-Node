import { deleteModel } from "../../models/index.models.js";

export const deletePQRS = (req, res) => {
    const { id } = req.params;
    try {
        const data = deleteModel(id);
        res.status(200).json({
            mensaje: "PQRS Eliminada - Simulación SQL",
            data
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar la PQRS"
        });
    }
};
