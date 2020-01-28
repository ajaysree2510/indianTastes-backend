let exampleMiddleware =(req, res, next) =>{

    req.user = {'firstname':"Ajay", 'lastnname':"Sreedhar"};
    next();


}

module.exports ={
    exampleMiddleware:exampleMiddleware

}