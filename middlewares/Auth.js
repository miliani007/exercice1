
function auth(req, res, next) {
    const authHeader = req.headers.authorization
    if (authHeader === 'apikey AHES6ZRVmB7fkLtd1')
        next()
    else {
        res.status(401)
        res.end()
    }
}

module.exports = auth