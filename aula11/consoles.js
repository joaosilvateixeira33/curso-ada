const path = require('node:path')

console.log('opa');

const filePath = path.join(process.cwd(), 'aula11','texto.txt')
console.dir(filePath)

const user = {
    name: "Jhon Dooe",
    empolye: "Programming",
    active: true
}
console.table(user)