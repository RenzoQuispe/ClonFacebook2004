# Clon Facebook2004

## Inicio rápido con Docker

### Configurar los archivos `.env` de ejemplo

- Configurar su `backend/.env`

    ```
    MONGODB_URI=mongodb://mongo:27017/dbclonfacebook    # Mantener el formato: mongodb://mongo:27017/su_base_de_datos

    VITE_DEPLOY_MODE=LocalServerDocker  # Mantener para pruebas locales con Docker

    NODE_PORT=

    JWT_SECRET=

    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    ```

- Configurar su `frontend/.env`

    ```
    NODE_PORT=     # Debe ser el mismo configurado en backend/.env
    HOST_IP=192.168.1.16    # ¡MODIFICAR! Reemplaza con tu IP local
    VITE_API_URL=http://${HOST_IP}:${NODE_PORT}/api     # Mantener
    ```

### Levantar los contenedor y acceder a la aplicación web

```
docker compose up --build
```

Accede a la aplicación web desde cualquier dispositivo en tu red local usando: `http://HOST_IP:5173` (En el ejemplo: `http://192.168.1.16:5173`)

## En proceso...

<img src="https://drive.google.com/uc?export=view&id=1W9g8tKGIjjavNfZ8MdWybML181ju_n7B" width="500" /> 
<img src="https://drive.google.com/uc?export=view&id=1rcrVDPiwnTdc0vYI1P1MZNt0yiAyobwf" width="500" /> 
<img src="https://drive.google.com/uc?export=view&id=1HwgFOyjrCsJdc0dB5eLw7y-EeiR5EtjU" width="500" /> 
<img src="https://drive.google.com/uc?export=view&id=1sKLzmIc19XJ5rCwGhFYNFCYIPHyzBAE9" width="500" />
