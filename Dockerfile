# Usa una imagen de Node para desarrollo
FROM node:18

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente (no es necesario con el volumen, pero útil para producción)
COPY . .

# Expone el puerto por defecto de Vite
EXPOSE 3000

# Comando por defecto (sobrescrito en docker-compose)
CMD ["npm", "run", "dev"]
