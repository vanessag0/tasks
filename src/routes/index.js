const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../sistemas-operativos-8d0e3-firebase-adminsdk-1zxpe-d505f949fe.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://sistemas-operativos-8d0e3-default-rtdb.firebaseio.com/'
});

const db = admin.database();

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
    /* db.ref('tasks').once('value', (snapshot) => {
        data = snapshot.val();
        {tasks: data}
    }); */
    res.render('tasks.html', pages)
});

router.get('/task', (req, res) => {
    res.render('task.html', pages)
});

/* router.post('/new-comment', (req, res) => {
    const newComment = {
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    }
    db.ref('comments').push(newComment);
    res.redirect('/');
}); */

module.exports = router;