const express = require('express');
const parser = require('body-parser');
const db = require('./db/db');
const userRoutes = require('./routes/users');
const app = express();

app.use(parser.json({ limit: "50mb" }));
app.use(parser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use('/api', userRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to Port ${port} successfully`));
