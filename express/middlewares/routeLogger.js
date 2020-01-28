const appConfig = require('./../config/appConfig')

let requestIpLogger = (req,res, next) =>{

    let remoteIp = req.connection.remoteAddress + '://' + req.connection.remotePort;
    let realIp = req.headers['X-REAL-IP'];
    console.log(req.method+"Request Made from" + remoteIp+'for route' + req.originalUrl);


//HANDLING CORS

if(require.method === 'OPTIONS') {
    console.log('!OPTIONS');
    var headers = {};


    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Allow-Max-Age"] = 86400; //24hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content";
    res.writeHead(200, headers);
    res.end();

}

else{

    res.header("Access-Control-Allow-Origin", appConfig.allowedCorsOrigin);
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" )
    next();

}

}

module.exports={
    requestIpLogger:requestIpLogger
}