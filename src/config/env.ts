import dotenv from 'dotenv';
dotenv.config();

if (!process.env.PORT || !process.env.DATABASE_URL) {
    throw new Error('Faltan variables de entorno. Asegúrate de tener un archivo .env con PORT y DATABASE_URL definidos.');
}

const env = {
    PORT: process.env.PORT || 5000,
    DATABASE_URL: process.env.DATABASE_URL || "file:./dev.db",
};

export default env;