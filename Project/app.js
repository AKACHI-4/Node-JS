const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express(); 

// ejs 
app.use(expressLayouts)
app.set('view engine', 'ejs')


// Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 3000; 

// process.env.PORT -> In case we deploy or 5000 for local host 

app.listen(PORT, console.log(`Server started on port ${PORT}`))

// But it will not get there at PORT 3000 
// coz we have not route to the PORT
// for that we have to create routes directory 


