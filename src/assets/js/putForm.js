// FUNÇÃO SUBMIT enviar form para o servidor

const form = {
    name: document.querySelector('.input-name'),
    nascimento: document.querySelector('.input-nasc'),
    mae: document.querySelector('.input-mae'),
    sexo: document.querySelector('.input-sexo'),
    sus: document.querySelector('.input-sus'),
    cpf: document.querySelector('.input-cpf'),
    rg: document.querySelector('.input-rg'),
    uf: document.querySelector('.input-uf'),
    dataemissao: document.querySelector('.input-emissao'),
    endereco: document.querySelector('.input-endereco'),
    bairro: document.querySelector('.input-bairro'),
    cidade: document.querySelector('.input-cidade'),
    cep: document.querySelector('.input-cep'),
    fone: document.querySelector('.input-fone'),
    descricao: document.querySelector('.input-descricao'),
    submit: document.querySelector("#signin-btn-submit"),
}


    form.submit.addEventListener('click', (e) => {
        e.preventDefault();
    
        
        const current = document.querySelector('.input-cpf')
        let cpfcurrent = current.value
    
        const url = `https://backend-flavio.herokuapp.com/prontuarios/buscas/${cpfcurrent}`
    
        fetch(url, {
            method: "put",
            mode: 'cors',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                'Authorization': 'bearer ' + localStorage.getItem('token') 
            },
    
            body: JSON.stringify({
                name: form.name.value,
                nascimento: form.nascimento.value,
                sexo: form.sexo.value,
                mae: form.mae.value,
                sus: form.sus.value,
                cpf: form.cpf.value,
                rg: form.rg.value,
                uf: form.uf.value,
                dataemissao: form.dataemissao.value,
                endereco: form.endereco.value,
                bairro: form.bairro.value,
                cidade: form.cidade.value,
                cep: form.cep.value,
                fone: form.fone.value,
                descricao: form.descricao.value
            })
        })
        location.reload(true)
        // .then(() =>  location.reload(true))
        // .then((res) => { JSON.stringify(res) })
        //    document.querySelector('.reset-form').reset()

    })