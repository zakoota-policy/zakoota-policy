const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.static(__dirname, { extensions: ['html'] })); // index.html, privacy.html, terms.html, contact.html

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✔ Server running on ${PORT}`));
