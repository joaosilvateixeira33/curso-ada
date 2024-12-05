const http = require('node:http')

const sports = [
    'soccer',
    'volley',
    'basketball',
    'tennis'
]

const server = http.createServer(async (request, response) => {
    const { method, statusCode, url } = request
    
    response.setHeader('Content-Type', 'text/html; charset=utf-8')

    const bodyPromise = new Promise((resolve, reject) =>{
        let body

        request.on('data', data =>{
            body  = JSON.parse(data)
        })

        request.on('end', data =>{
            resolve(body)
        })
    })


    request.headers.accept = '*'
    request.headers.allow = '*'



    if (url === '/') {
        response.write('<div><h1>hello from node</h1></div>')
        response.end()
        return 
    }

    if (url === '/sports') {
        if(method === 'GET'){
            response.write(JSON.stringify(sports))
            response.end()
            return 
        }

        if(method === 'POST'){
            const body = await bodyPromise

            const {name} = body

            if(!sports.map(sport => sport.toLowerCase()).includes(name.toLowerCase())){
                sports.push(name.toLowerCase())
            }

            response.write(name.toLowerCase())
            response.end()
            return
        }
    }

    response.statusCode = 404
    response.write('<h1>Página não encontrada</h1>')
    response.end()
})

server.listen(3000, 'localhost', () => {
    console.log(`server on in http://localhost:3000`)
})
