 require('dotenv').config();
 const express = require ('express');
 const bodyParser = require ('body-parser');
 const config = require('./config/index');
 const connectDB = require('./config/connections/mongodb');
 const dispatchRoute = require('./routes/dispatch.route');
 
 connectDB();
 // create the app
  const app = express();

  // app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.json({ type: '*/*' }));

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.json());

  app.use((req, res) => {
      console.log(req.method, `[${req._entity}]`, req.path);
      });

      app.use('/dispatch', dispatchRoute);
  
      app.listen(config.PORT, () => {
        console.log(`Server is up and running on port number ${config.PORT}`);
        // Connect Database
        connectDB();
      });