function testmiddleware(req,res,next){
    console.log("i am in the middleware")
    next()
}

module.exports= testmiddleware