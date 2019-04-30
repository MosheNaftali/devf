const express = require('express');
const morgan = require('morgan');
const path = require('path')
const {} = require('./database')
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routes/task.routes'))

app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'), ()=>{
    console.log(`Servidor iniciado en puerto ${app.get('port')}`);
})