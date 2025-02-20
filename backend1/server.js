const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // Asegúrate de tener este archivo si lo necesitas
const loginRoutes = require('./routes/loginRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/bakeryDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado a MongoDB');
})
.catch((error) => {
  console.error('Error conectando a MongoDB:', error);
});

// Usar las rutas de usuarios
app.use('/api/users', userRoutes); 
// Usar las rutas de productos
app.use('/api', productRoutes); // Asegúrate de tener este archivo si lo necesitas
// Usar las rutas de login
app.use('/api/login', loginRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});