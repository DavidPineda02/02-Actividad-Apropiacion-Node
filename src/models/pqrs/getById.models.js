export const getByIdModel = (id) => {
    try {
        const data = [
            { id: 1, nombre: "PQRS 1" },
            { id: 2, nombre: "PQRS 2" }
        ];
        return data.find(item => item.id === parseInt(id));
    } catch (error) {
        return [];
    }
}
