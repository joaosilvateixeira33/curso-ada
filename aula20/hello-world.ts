import express from 'express'
import {config} from 'dotenv'
import {join} from 'path'
import {readFileSync} from 'fs'

config()
const app = express()
const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3000

app.get('/', (req, res) => {    
    // res.send('Hello World!!')
    // res.send('<h1>Hello World!!</h1>')
    const homepath = join(__dirname, 'home.html')
    const read
})

app.listen(port, () => {
    console.log(`Example app listening on port ${url}:${port}`)
})