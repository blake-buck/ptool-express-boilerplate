// logs basic information about the request
module.exports = function(request, response, next){
    const information= {ip, host, method, originalUrl} = request;
    console.log(information);
    next();
}