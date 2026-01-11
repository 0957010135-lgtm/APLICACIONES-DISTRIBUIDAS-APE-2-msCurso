require('dotenv').config();
const express = require('express');
const cursoRoutes = require('./routes/curso.routes');

const app = express();
app.use(express.json());
app.use(cursoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`msCurso corriendo en puerto ${process.env.PORT}`);
});
