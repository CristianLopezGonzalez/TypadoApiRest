// tipos de los atributos de los productos
export interface CreateProductDTO {
    name: string;
    description: string;
    price: number;
}

// tipos de los atributos de los productos para la actualización, todos opcionales
export interface UpdateProductDTO {
    name?: string;
    description?: string;
    price?: number;
}
// tipo de respuesta para las operaciones con productos
export interface ResponseBody{
    id:string
    name: string;
    description: string;
    price: number;
    createdAt: Date;
}

//tipo de id de los productos para las operaciones de búsqueda, actualización y eliminación
export interface ProductId {
    id: string;
}

// tipo de respuesta para los errores
export interface ErrorResponse {
    error: string;
}

// tipo de respuesta para las operaciones con productos, puede ser un producto o un error
export type ApiResponse<T> = T | ErrorResponse;