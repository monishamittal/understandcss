const express = require('express');
const PORT = process.env.PORT || '7867';
const path = require('path');
const routes = require('./routes/routes');
const app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server Started , Port running on ${PORT}` + ' ' + `http://localhost:${PORT}/`);
});