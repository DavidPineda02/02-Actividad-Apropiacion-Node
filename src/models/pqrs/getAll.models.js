export const getAllModel = () => {
    try {
        const data = [
            { id: 1, nombre: "PQRS 1" },
            { id: 2, nombre: "PQRS 2" }
        ];
        return data;
    } catch (error) {
        return [];
    }
}