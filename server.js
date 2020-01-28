const express = require('express');
const appConfig = require('./express/config/appConfig')
const route = require('./express/routes/routing')
const bodyParser = require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const globalErrorMiddleware = require('./express/middlewares/appErrorHandler')
const routeLogger = require('./express/middlewares/routeLogger')
const http = require('http')
const helmet = require('helmet');
const logger = require('./express/libs/loggerLib')

//const foods = require('./foods');//adding data

const app= express();

app.use(helmet())

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(globalErrorMiddleware.globalErrorHandler)
app.use(routeLogger.requestIpLogger)


app.use(cors());//CORS
route.setRouter(app);//activating route

app.use(globalErrorMiddleware.globalNotFoundHandler)
//end of 404 handler

/*Creating HTTP server */

const server = http.createServer(app)
//start listening to server
console.log(appConfig)
server.listen(appConfig.port)
server.on('error', onError)
server.on('listening', onListening)
//end server listening code

//Event listener for http server "error" event

function onError(error) {
    if(error.syscall != 'listen') {
        logger.error(error.code+'not equal listen', 'serverOneErrorHandled', 10)
        throw error;
    }
    
    switch(error.code) {
        case 'EACCES':
            logger.error(error.code+':elevated priviliges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break;
        case 'EADDRINUSE':
            logger.error(error.code+':port is already in use', 'serverOnErrorHandler', 10)
            process.exit(1)
            break;
        default:
            logger.error(error.code+'Some unknown error occured', 'serverOnErrorHandler', 10)
            throw error;
    }
}


// event listener for http server 'listening event'

function onListening(){
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on '+bind)
    logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 1)
    
    let db=mongoose.connect(appConfig.db.uri, {useUnifiedTopology: true });
}
process.on('unhandledRejection', (reason,p)=> {
    console.log('Unhandled Rejection at: Promise', p, 'reason: ',reason)
})

/* app.listen(appConfig.port, ()=>{
    console.log(`Server started on ${appConfig.port}`);

    //creating mongodb connection

    
}); */


mongoose.connection.on('error', function(err) {
    console.log('Database connection error');
    console.log(err);
})

mongoose.connection.on('open', function(err) {
    if(err){
        console.log('Database error')
        console.log(err)
    }
    else{
        console.log('Database connection successful')
    }
})