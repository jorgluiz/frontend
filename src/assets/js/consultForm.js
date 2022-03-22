/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// API  DE  banco de dados
// FUNÇÃO: PREENCHER CAMPOS "input" 

const cpf = document.querySelector('#cpf') //variável de interface
let searchCPF //variável de ambiente

const inputBtn = document.querySelector('.input-btn')

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector('#' + campo)) { // validação: verificar se meu input=ID tem os mesmos campos que vem do Fetch. E o campo que meu input=ID não tiver ( descarta )

            // verifica  meus  ID, se não conter o campo ignora e pega só os ID  existente no meu campo  "input"
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

inputBtn.addEventListener('click', async (event) => {  // evento "blur" captura o que foi digitado no campo
    // if (event.keyCode === 13)
    if (cpf.value.includes('.')) {
        searchCPF = cpf.value.replace('.', '')
    } else {
        searchCPF = cpf.value
        // console.log(search)
    }

    // viriável de ambiente
    const options = {
        headers: { 
            'Authorization': 'bearer ' + localStorage.getItem('token')
            // 'x-access-token': localStorage.getItem('refresh')
        },
        mode: 'cors',
        cache: 'default',
    }



    fetch(`https://backend-api-on.herokuapp.com/posts/buscas/${searchCPF}`, options)
        .then(resp => resp.json())
        .then(data => showData(data))
        
        .catch(e => e.message)

})