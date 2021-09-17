const express = require('express');
const cors = require('cors');
const port = 4000;

const app = express();
const ctrl = require('./controller.js');

app.use(express.json());
app.use(cors());


app.get('/api/users', ctrl.getUser);
app.delete('/api/users/:id', ctrl.deleteUser);
app.post('/api/users', ctrl.createUser);





app.listen(port, () => console.log(`Server running on ${port}`));
