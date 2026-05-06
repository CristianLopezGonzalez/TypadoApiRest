import { ProductosService } from "../services/productosService";
import { CreateProductDTO, ResponseBody, ProductId, UpdateProductDTO, ApiResponse } from "../types/productosTypes";
import { Response, Request } from "express";

export class ProductosController {
    constructor(private ps: ProductosService = new ProductosService()) { 
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.update = this.update.bind(this);
        this.create = this.create.bind(this);
        this.deleteById = this.deleteById.bind(this);
    }

    async getById(req: Request<ProductId>, res: Response<ApiResponse<ResponseBody>>) {
        try {
            const { id } = req.params;
            const producto = await this.ps.getById(id);
            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }
            return res.json(producto);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            console.error(`Error al obtener el producto por ID: ${message}`);
            res.status(500).json({ error: `Error al obtener el producto por ID: ${message}` });
        }
    }

    async getAll(_req: Request, res: Response<ApiResponse<ResponseBody[]>>) {
        try {
            return res.json(await this.ps.getAll());
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            console.error(`Error al obtener los productos: ${message}`);
            res.status(500).json({ error: `Error al obtener los productos: ${message}` });
        }
    }

    async update(req: Request<ProductId, ResponseBody, UpdateProductDTO>, res: Response<ApiResponse<ResponseBody>>) {
        try {
            const { id } = req.params;
            const product = req.body
            const updated = await this.ps.updateProduct(id, product)
            return res.status(200).json(updated)

        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            console.error(`Error al hacer update de producto: ${message}`);
            res.status(500).json({ error: `Error al hacer update de producto: ${message}` });
        }
    }

    async create(req: Request<unknown, ResponseBody, CreateProductDTO>, res: Response<ApiResponse<ResponseBody>>) {
        try {
            const product = req.body
            const created = await this.ps.create(product)
            return res.status(201).json(created)
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            console.error(`Error al crear el producto: ${message}`);
            res.status(500).json({ error: `Error al crear el producto: ${message}` });
        }
    }

    async deleteById(req: Request<ProductId>, res: Response<ApiResponse<ResponseBody>>) {
        try {
            const { id } = req.params;
            const deleted = await this.ps.deleteById(id)
            return res.status(200).json(deleted)

        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            console.error(`Error al eliminar el producto: ${message}`);
            res.status(500).json({ error: `Error al eliminar el producto: ${message}` });
        }
    }
}
