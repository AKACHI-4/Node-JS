const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const app = express(); 

// DB Config
const db = require('./config/keys').MongoURI; 

// Connect to Mongo 

mongoose.connect(db , { 
    useNewUrlParser: true
})
.then( () => console.log('MongoDB Connected..'))
.catch(err => console.log(err))


// ejs 
app.use(expressLayouts)
app.set('view engine', 'ejs')

// BodyParser
app.use(express.urlencoded ( { 
    extended : false
}))

// Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 3000; 

// process.env.PORT -> In case we deploy or 5000 for local host 

app.listen(PORT, console.log(`Server started on port ${PORT}`))

// But it will not get there at PORT 3000 
// coz we have not route to the PORT
// for that we have to create routes directory 


