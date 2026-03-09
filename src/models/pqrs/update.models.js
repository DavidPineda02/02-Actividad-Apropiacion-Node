export const updateModel = (id, pqrsData) => {
    try {
        const updatedPQRS = {
            id: parseInt(id),
            nombre: pqrsData.nombre,
        };
        return updatedPQRS;
    } catch (error) {
        return [];
    }
}
