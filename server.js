var app = require('connect')();

app.use(require('serve-static')('./build'));

app.listen(5000);
