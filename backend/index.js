require('./config');

const express= require('express');
const router = require('./routes');
const app= express();
const Task=require(`./models/Task`)
const port= process.env.PORT || 3000;
app.use(express.json())
app.use(router);


// enable CORS
app.use( function ( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
} );


app.get( '/tasks', ( req, res ) => {
    Task.find({}).then(tasks=>res.send(tasks))
} );

app.post( '/tasks', ( req, res ) => {
    if ( req.body.text ) {
        try {
           new Task(req.body).save().then(task=>res.json({task}))
        } catch (err) {
            console.error(err.message);
            res.status(500).json({message:'something went wrong. my bad.'})

        }
    } else {
        res.status(400).json({message:'NO TEXT? BOLD CHOICE COTTON'})
    }

} );

app.delete('/tasks/:id', (req, res) => {
    console.log(req.params.id)
    Task.findByIdAndDelete(req.params.id).then(task=>res.send(task)).catch(err=>res.send(err))
})

app.listen( port, () => console.log( 'The server is open on ' + port ) );
