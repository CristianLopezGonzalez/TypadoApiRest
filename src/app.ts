import Express, { Request, Response } from 'express'
import env from './config/env'
import productosRoutes from './routes/productosRoutes'

const app = Express()

// Middlewares
// Para parsear el cuerpo de las solicitudes en formato JSON
app.use(Express.json()) 
// Para parsear el cuerpo de las solicitudes con datos codificados en URL (por ejemplo, formularios HTML)
app.use(Express.urlencoded({ extended: true }))
// Para servir archivos estáticos desde la carpeta "public". Esto es útil para servir archivos como imágenes, CSS, JavaScript, etc. desde esa carpeta. 
app.use(Express.static('public')) 

app.use('/api/productos', productosRoutes)

// Ruta de ejemplo para verificar que la API está funcionando correctamente
app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({
        status: 200,
        success: true,
        message: 'Api funcionando correctamente'
    })
})

// Iniciar el servidor en el puerto 3000 o 5000 que es lo recomendado para desarrollo
app.listen(env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${env.PORT}`)
})

export default app