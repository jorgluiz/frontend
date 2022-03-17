
// estrutura do PDF
const generate = document.querySelector('#generatePDF')
let output = ''

// input de entrada do CPF para consulta
const cpfCurrent = document.querySelector('.cpfCurrent')


cpfCurrent.addEventListener('blur', () => {
    const current = cpfCurrent.value

    fetch(`https://backend-api-on.herokuapp.com/prontuarios/buscas/${current}`, {
        mode: 'cors',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('token')
        }
    })
        .then(res => res.json())
        .then(data => {
            let arr = [data]
            arr.forEach(newData => {

                output += `
                    <header>
                    <address>
                    <h1 class="border">PRONTUÁRIO MÉDICO</h1>
                            <p> Associação de Articulação </p>
                            <p> Social dos Moradores </p>
                            <p> Comerciantes do Bairro de Peixinhos - AASCMBP</p>
                            <p> CNPJ: 19.007.800/0001-62 </p>
                        </address>
                        <span>
                            <!--<img alt="it" src="base64imagecodehere" width="150">-->
                        </span>
                    </header>
                        <address>
                            <h3 class="border padding-top">DADOS DO PACIENTE</h3>
                            <p> Nome: ${newData.name} </p>
                            <p class="inline-block-nasc Data de Nascimento: ${newData.nascimento}> </p>
                            <p class="inline-block-sexo"> Sexo: ${newData.sexo}</p>
                            <p> Nome da mãe: ${newData.mae}</p>
                            <p> Cartão do sus: ${newData.sus} </p>
                            <p class="inline-block-cpf"> CPF: ${newData.cpf} </p>
                            <p class="inline-block-rg"> RG: ${newData.rg} </p>
                            <p class="inline-block-emissao"> Data de emissão: ${newData.dataemissao} </p>
                            <p> CEP: ${newData.cep} </p>
                            <p class="inline-block-endereco"> Endereço: ${newData.endereco}  </p>
                            <p class="inline-block-uf">UF: ${newData.uf} </p>
                            <p class="inline-block-cidade"> Cidade: ${newData.cidade}</p>
                            <p class="inline-block-bairro">Bairro:${newData.bairro} </p>
                            <p> Fone: ${newData.fone} </p>
                            <h3 class="border padding-top">INFORMAÇÕES DO PACIENTE</h3>
                            <p><span>${newData.descricao}</span></p>
                        </address>
                    </div>
            `;
            });
            generate.innerHTML = output;
        })

})


function imprimitPDF() {
    let getData = document.querySelector('#generatePDF').innerHTML

    let janela = window.open('', '', 'width=794, heigth=1123')
    janela.document.write('<html><head>')
    janela.document.write('<title>PDF</title></head>')
    janela.document.write('<body>')
    janela.document.write(getData)
    janela.document.write('</body></html>')
    janela.print()

    location.reload(true)
}




// const btn = document.querySelector('#input-cpf')
// // let cpfValue = document.querySelector('.cpf')


// btn.addEventListener('click', () => {
//     const options = {
//         method: 'get',
//         mode: 'cors',
//         cache: 'default',
//         headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') }
//     }

//     fetch(`http://localhost:3000/generatepdf/1`, options)
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(e => e.message)


// })
