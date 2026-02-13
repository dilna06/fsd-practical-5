const express = require('express');
const app = express();

app.use(express.json());

// Logger middleware
app.use(require('./middleware/logger'));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
