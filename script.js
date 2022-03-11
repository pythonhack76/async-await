//async e await 

//funzione che crea la richiesta
function makeRequest(location, giorno = null){
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location} il giorno ${giorno}`)
        if(location === 'Google') {
            resolve ('Google sai hi')

        } else {
            reject ('Errore ! We parlare solo con Google!')
        }
    })
}
//funzione che processa la richiesta
function processRequest(response ) {
    return new Promise ((resolve, reject ) => {
        console.log('processing response') 
        resolve(`Informazioni + ${response}`)
    })
}

// makeRequest('Microsoft').then(response => {
//     console.log('resposne received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

async function doWork() {
    try{   
        const response = await makeRequest('Google')
        console.log('Response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
 }catch (err) {
     console.log(err)
 }
}
doWork() 