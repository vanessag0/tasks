const app = require('./app');

// listening server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});