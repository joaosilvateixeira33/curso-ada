import express, { Request } from 'express'
import {config} from 'dotenv'
import path from 'path'
import {readFileSync} from 'fs'

config()
const app = express()
const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request,  response) => {    
    // res.send('Hello World!!')
    // res.send('<h1>Hello World!!</h1>')
    const homepath = path.join(__dirname, 'home.html')
    const readHome = readFileSync(homepath)
    return response.status(200).send(readHome)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${url}:${port}`)
})