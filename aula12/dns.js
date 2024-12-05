const dns = require('node:dns')


async function bootstrap (){
    const searchUrl = 'google.com'
    const addresses = await dns.promises.resolve4(searchUrl)
    console.log(addresses);

    const nameServers = await dns.promises.resolveNs(searchUrl)
    console.log(nameServers);   

    const ipNs = await dns.promises.resolve4(nameServers[1])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNs)

    const addressesDNS = await resolver.resolve4(searchUrl, (error, addresses)=>{
        if(error){
            console.error('Não foi possivel encontrar ipv4')
        }
        console.log(addressesDNS);
    })
}

bootstrap()