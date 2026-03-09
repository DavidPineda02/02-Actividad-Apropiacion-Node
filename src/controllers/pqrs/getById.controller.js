import { getByIdModel } from "../../models/index.models.js";

export const getPQRSById = (req, res) => {
    const { id } = req.params;
    try {
        const data = getByIdModel(id);
        res.status(200).json({ 
            mensaje: "Detalle de PQRS - Simulación SQL",
            data
        });
    } catch (error) {
        res.status(500).json({ 
            mensaje: "Error al obtener el detalle de la PQRS"
        });
    }
};