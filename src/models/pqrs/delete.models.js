export const deleteModel = (id) => {
    try {
        const deletedPQRS = {
            id: parseInt(id),
            mensaje: "PQRS eliminada exitosamente"
        };
        return deletedPQRS;
    } catch (error) {
        return [];
    }
}
