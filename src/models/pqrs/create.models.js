export const createModel = (pqrsData) => {
    try {
        const newPQRS = {
            nombre: pqrsData.nombre
        };
        return newPQRS;
    } catch (error) {
        return [];
    }
}
