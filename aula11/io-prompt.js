const rl = require('readline');
const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

const promptPromise = {
    question: (pergunta) => new Promise((resove, reject)=>{
        try {
            prompt.question((pergunta), (resposta) => resove(resposta))
        } catch (error) {
            reject(error)
        }
    }),

    close: () => prompt.close()
}

// prompt.question('Qual seu numero favorito? ', (resposta) => {
//     console.log(`O dobro do seu numero é: ${parseInt(resposta)*2}`);
//     prompt.close()
// })


async function askUser(){
    const numero = await promptPromise.question('Qual seu numero favorito?: ')
    console.log(`O dobro do seu numero é: ${parseInt(numero)*2}`)
    const cor = await promptPromise.question('Qual a sua cor favorita?: ')
    console.log(`A sua cor favorita é: ${cor}`)
    promptPromise.close()
}

askUser()
