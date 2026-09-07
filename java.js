const express = require('express');
const path = require('path');

const app = express();
const PUERTO = 3000;

// Servir todos los archivos que estén en la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PUERTO, () => {
  console.log(`Servidor Express corriendo en: http://localhost:${PUERTO}`);
});