const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes/route');

app.use(express.json());

app.use('/books', routes);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));