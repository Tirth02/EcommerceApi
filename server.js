const express = require('express');
const configs = require('./configs/serverconfig')
console.log(configs, configs.PORT)

const app = express();
app.listen(configs.PORT, () => {
    console.log('Server Started',configs.PORT);
});