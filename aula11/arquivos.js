const path = require('node:path')
const fs = require('node:fs')

// caminho do arquivo
const filePath = path.join(process.cwd(), 'aula11','texto.txt')
const fileOutPath = path.join(process.cwd(), 'aula11','texto-alterado.txt')
// console.log(filePath);

//ler conteudo do arquivo
fs.readFile(filePath, {}, (erro, dados) =>{
    if(erro){
        console.error(`erro na leitura do arquivo no caminho ${filePath}`);
        return
    }
    // console.log(dados.toString())

    // inserir conteudo no arquivo
    const texto = dados.toString()
    const linhas = texto.split('\n')
    // linhas.forEach((linha, index) => {
    //     console.log(`${index + 1} - ${linha}`)
    // })
    
    // gravar conteudo escrito no arquivo
    const linesUpdate = linhas.map((linha, index) => 
        `${index + 1} - ${linha}`
    )

    fs.writeFile(fileOutPath, linesUpdate.join('\n'), {}, (erro)=>{
        if(erro){
            console.error(`erro na leitura do arquivo no caminho ${fileOutPath}`);
            return
        }
    })

})
