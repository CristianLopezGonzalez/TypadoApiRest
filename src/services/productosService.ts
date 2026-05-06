import prisma from "../config/prisma";
import { CreateProductDTO, UpdateProductDTO } from "../types/productosTypes";

export class ProductosService {

    async getById(id: string) {
        try {
            const product = await prisma.product.findUnique({ where: { id } });
            if (!product) {
                return null
            }

            return product
        } catch (error: any) {
            console.error(`Error al obtener el producto por ID: ${error.message}`);
            throw new Error(`Error al obtener el producto por ID: ${error.message}`);
        }
    }

    async getAll() {
        try {
            return await prisma.product.findMany();
        } catch (error: any) {
            console.error(`Error al obtener los productos: ${error.message}`);
            throw new Error(`Error al obtener los productos: ${error.message}`);
        }
    }

    async updateProduct(id: string, data: UpdateProductDTO) {
        try {
            const updatedProduct = await prisma.product.update({
                where: { id },
                data,
            });

            return updatedProduct;
        } catch (error: any) {
            console.error(`Error al actualizar el producto: ${error.message}`);
            throw new Error(`Error al actualizar el producto: ${error.message}`);
        }
    }


    async create(data: CreateProductDTO) {
        try {

            return await prisma.product.create({ data });

        } catch (error: any) {
            console.error(`Error al crear el producto: ${error.message}`);
            throw new Error(`Error al crear el producto: ${error.message}`);
        }
    }

    async deleteById(id: string) {
        try{

            return await prisma.product.delete({ where: { id } });

        }catch (error: any) {
            console.error(`Error al eliminar el producto: ${error.message}`);
            throw new Error(`Error al eliminar el producto: ${error.message}`);
        }
    }

}