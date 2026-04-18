// const axios = require('axios')
// const appid = 'ef0b0973b783e0614ac87612ec04344b'
// const  baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
// const q = 'Itu'
// const cnt = 1
// const units = 'metric'
// const  lang = 'pt_br'
// const url = `${baseURL}?q=${q}&appid=${appid}&$cnt=${cnt}&units=${units}&lang=${lang}`
// axios.get(url)
// .then(res => {console.log(res.data)
// return res.data
// })
// .then(res => {
//     console.log(res.list)
//     return res.list
// })
// .then(res => {
//     //mostrar temperatura máxima da primeira previsão do tempo
//     console.log(res[0].main.temp_max)
//     return res
// })
// .then(previsoes => {
//     //iterar sobre a lista aqui
//     for(let previsao of previsoes)
//         //quero exibir a descrição de cada uma 
//     console.log(previsao.weather[0].description)
// })
// console.log('A')
// //data: caracteristica de axios. Corpo da resposta fica associado a uma chave chamada data


// async function hello(nome){
//     return`Olá, ${nome}!`
// }
// const res = hello('Ana')
// res.then((texto) => console.log(texto))
// console.log("A")

// const fatorial = (n) => {
//     if( n < 0) return Promise.reject("Valor não pode ser negativo");
//     for( let i =2; i <= n; i++){
//         return Promise.resolve(res)
//     }
// }
   
// const chamadaComThenCatch = () => {
//     fatorial(5)
//     then(res => console.log('Res: ${res}'))
//     .catch(function(erro){ console.log('Erro: ${erro}') })


//     fatorial(-5)
//     then(res => console.log('Res: ${res}'))
//     .catch(function(erro){ console.log('Erro: ${erro}') })
// }

 //chamadaComThenCatch()

//  const chamadaComAsyncAwait = async () => {
//     try{
//     const f1 = await fatorial(5)
//     console.log('Res: ${f1}')
//     }
//     catch(erro){
//      console.log('Erro: ${erro}')
//     }
//     try{
//         const f2 = await fatorial(-1)
//     console.log('Res: ${f2}')
//     }
//     catch{
//         console.log('Erro: ${erro}')
//     }

//  }
//  chamadaComAsyncAwait()

//conversar com API de previsão do tempo usando async/await
const axios = require('axios')
const appid = `ef0b0973b783e0614ac87612ec04344b`
const  baseURL = `https://api.openweathermap.org/data/2.5/forecast`
const q = 'Itu'
const cnt = 1
const units = 'metric'
const  lang = 'pt_br'
const url = `${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`

const previsaoDoTempo = async () => {
    try{
        const res = await axios.get(url)
        console.log(res.data)
        const previsoes = res.data.list
        console.log(previsoes[0].main.temp_max)
        for(let previsao of previsoes)
            console.log(previsao.weather[0].description)
    }
    catch(erro){
        console.log(`Erro: ${erro}`)
    }
}
previsaoDoTempo();

//porta é um número que se usa para diferenciar um servidor de outro.