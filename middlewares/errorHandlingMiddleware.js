function errorHandlingMiddleware(error, req, res, next) {
    if(err.type === 401){
        return res.sendStatus(401)
    }
    if(err.type === 404){
        return res.sendStatus(404)
    }
    if(err.type === 409){
        return res.sendStatus(409)
    }
    if(err.type === 422){
        return res.sendStatus(422)
    }

	return res.sendStatus(500);
}