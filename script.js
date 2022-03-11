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


function processRequest(response ) {
    return new Promise ((resolve, reject ) => {
        console.log('processing response') 
        resolve(`Informazioni + ${response}`)
    })
}

makeRequest('Microsoft').then(response => {
    console.log('resposne received')
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})

async function doWork() {
   const response = await makeRequest('Google')
   console.log('Response received')
   const processedResponse = await processRequest(response)
}