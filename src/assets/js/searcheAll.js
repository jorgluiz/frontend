// API  DE  banco de dados
// FUNÇÃO: PREENCHER CAMPOS "input" 

const cpf = document.querySelector("#cpf") //variável de interface
let search //variável de ambiente

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) { // validação: verificar se meu input=ID tem os mesmos campos que vem do Fetch. E o campo que meu input=ID não tiver ( descarta )

            // verifica  meus  ID, se não conter o campo ignora e pega só os ID  existente no meu campo  "input"
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

cpf.addEventListener("blur", async (event) => {  // evento "blur" captura o que foi digitado no campo
    // if (event.keyCode === 13)
        if (cpf.value.includes(".") ) {
            search = cpf.value.replace(".", "")
        } else {
            search = cpf.value
        }

    // viriável de ambiente
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') }
    }
    
          fetch(`https://backend-api-on.herokuapp.com/prontuarios/buscas/${search}`, options)
             .then(resp => resp.json())
             .then(data => showData(data))
             .catch(e => e.message)


    // console.log(url)
    // let resp = await url.json()
    // let data = await resp
    // console.log(data)
    // showData(data)


})