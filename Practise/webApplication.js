// mpdule http import syntax
const HTTP = require('http')
const server = HTTP.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('this is about page')
    }
    res.end(
        `
        <h1> OOPS!</h1>
        <p> No page Found</p>
        <a href="/"> Home </a>
        `
    )

})
server.listen(8080)

