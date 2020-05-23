const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.Port || 3000
app = express();

app.use(express.static(publicPath));







app.listen(port, () => {
    console.log(`server started on port ${port}`)
})