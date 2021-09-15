const { Router } = require('express');
const router = Router();

const admin = require('firebase-admin');
var serviceAccount = require("../../sistemas-operativos-8d0e3-firebase-adminsdk-1zxpe-d505f949fe.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://sistemas-operativos-8d0e3-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/task', (req, res) => {
    db.ref('tasks').once('value', (snapshot) => {
        const tasks = snapshot.val();
        res.render('tasks', { tasks: tasks });
    });
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/admin', (req, res) => {
    res.render('admin');
});

router.post('/new-task', (req, res) => {
    const newTask = {
        title: req.body.title,
        date: req.body.date,
        description: req.body.description
    }
    db.ref('tasks').push(newTask);
    res.redirect('/task');
});

module.exports = router;