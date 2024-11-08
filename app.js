const express = require('express');
const { engine } = require('express-handlebars'); // Usa `engine` si usas express-handlebars >= 7.x
const path = require('path');

const app = express();

// Configuración de Handlebars como motor de plantillas
app.engine('handlebars', engine({
    defaultLayout: 'main',          // Define el layout principal
    layoutsDir: path.join(__dirname, 'views', 'layouts'), // Ruta de los layouts
    partialsDir: path.join(__dirname, 'views', 'partials') // Ruta de los partials
}));

app.set('view engine', 'handlebars');

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/mision', (req, res) => {
    res.render('mision');
});

app.get('/vision', (req, res) => {
    res.render('vision');
});

app.get('/servicios', (req, res) => {
    res.render('servicios');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/inicio', (req, res) => {
    res.render('inicio');
});

app.get('/productos', (req, res) => {
    res.render('productos');
});




// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.render('inicio', { title: 'Restaurante Miralago' });
});

// Ruta de error 404
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Página no encontrada' });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
