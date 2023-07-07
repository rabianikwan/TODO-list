import express from 'express';

import path from 'path';

const app = express();

const port = 3000;

app.use(express.json());

app.use(express.static(path.join('frontend', 'build')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join('frontend', 'build', 'index.html'));
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server is running on http://localhost:${port}`));
