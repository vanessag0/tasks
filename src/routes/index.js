const express = require('express');
const router = express.Router();

const pages = {
    home: 'Inicio',
    tasks: 'Tareas',
    task: 'Actividad',
    contact: 'Contacto'
}

router.get('/', (req, res) => {
    res.render('index.html', pages);
});

router.get('/contact', (req, res) => {
    res.render('contact.html', pages)
});

router.get('/tasks', (req, res) => {
    res.render('tasks.html', pages)
});

router.get('/task', (req, res) => {
    res.render('task.html', pages)
});

module.exports = router;