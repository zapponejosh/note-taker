const express = require('express');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);



 app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
