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

module.exports = router;