import { getAllModel } from "../../models/index.models.js";

export const getAllPQRS = (req, res) => {
    try {
        const data = getAllModel();
        res.status(200).json({ 
            mensaje: "Lista de PQRS - Simulación SQL",
            data 
        });
    } catch (error) {
        res.status(500).json({ 
            mensaje: "Error al obtener la lista de PQRS"
        });
    }
};