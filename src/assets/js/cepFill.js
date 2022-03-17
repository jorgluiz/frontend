// API  DE  CEP
// FUNÇÃO: PREENCHER CAMPOS "input" 

const cep = document.querySelector("#cep") //variável de interface
let search //variável de ambiente

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) { // validação: verificar se meu input=ID tem os mesmos campos que vem do Fetch. E o campo que meu input=ID não tiver ( descarta )

            // verifica  meus  ID, se não conter o campo ignora e pega só os ID  existente no meu campo  "input"
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur", async (event) => {  // evento "blur" captura o que foi digitado no campo
    // if (event.keyCode === 13)
        if (cep.value.includes("-")) {
            search = cep.value.replace("-", "")
        } else {
            search = cep.value
        }

    // viriável de ambiente
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        // crossDomain: true,
        // dataType: 'jsonp',
    }

     const url = await fetch(`https://viacep.com.br/ws/${search}/json`, options)
    const resp = await url.json()
    const data = await resp
    
    showData(data)
        // .then(resp => resp.json())
        // .then(data => showData(data))
        // .catch(e => e.message)


})