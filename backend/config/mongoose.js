const mongoose=require('mongoose');

const {PORT, DB, HOST} = process.env.MongoDB;

mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`, { useNewUrlParser: true})
.then(()=> console.log('Connected to database')).catch((error)=> console.log(error)) // displays an error

module.exports=mongoose