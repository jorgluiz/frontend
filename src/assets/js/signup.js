// objeto validador com métodos (funcionalidades)
let objValidator = {
    handleSubmit: (event) => {
        event.preventDefault()

          //  ###   submit form ao servidor   ###
          const formValue = {
            username: document.querySelector('.signup-username'),
            email: document.querySelector('.signup-email'),
            password: document.querySelector('.signup-password'),
            confirmPassword: document.querySelector('.signup-confirmPassword'),
        }
 
         const options = {
             method: 'post',
             mode: 'cors',
            headers: {
               Accept: "application/json, text/plain, */*",
               "Content-Type": "application/json",
            },
            
             body: JSON.stringify({
                 username: formValue.username.value.trim(),
                 email: formValue.email.value.toLowerCase().trim(),
                 password: formValue.password.value,
                 confirmPassword: formValue.confirmPassword.value
             })
         }
 
         const prontuarioUrl = 'https://backend-flavio.herokuapp.com/signup'
 
         fetch(prontuarioUrl, options)
         .then(response => {

             if(response.ok === true) location.href = '/index.html'
     
             if(response.status === 401){
     
                 let email = document.querySelector('.signup-email')
                 email.style='margin: 0 auto' // style input name
                 email.style.borderColor = '#FF0000' // style input name
     
             //    let errorElement = document.createElement('div')
             //    errorElement.classList.add('error-email')
             
                const errorElement = document.querySelector('.email-error')
                errorElement.textContent = 'Já existe um email cadastrado'
     
                email.insertAdjacentElement('afterend', errorElement)
             }
           
         })
         .catch(err => err)

        // obter todos inputs
        let inputs = form.querySelectorAll('input')

        objValidator.clearErrors()

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i]
            let check = objValidator.checkInput(input)
            if (check !== true) {
                send = false
                //exibir o erro
                objValidator.showError(input, check)
            }
        }
    },

    checkInput: (input) => {
        let rules = input.getAttribute('data-rules')

        //regras
        if (rules !== null) {
            rules = rules.split('|')
            for (let key in rules) {
                // console.log(rules[key])
                let rDetails = rules[key].split('=')
                switch (rDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'este campo é obrigatório'
                        }   
                        break
                    case 'min': //password
                        if (input.value.length < rDetails[1]) {
                            return 'mínimo ' + rDetails[1] + ' de caracteres'
                        }
                        break
                    case 'email': // email
                        if (input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            if (!regex.test(input.value.toLowerCase())) {
                                return 'E-mail digitado não é válido!'
                            }
                        }
                        break
                    case 'equal': //confirmPassword
                        const confirmPassword = document.querySelector('.signup-password')
                        if (input.value != confirmPassword.value){
                            return 'senha não confere'
                        }
                }
            }
        }

        return true
    },
    showError: (input, error) => {
        input.style.borderColor = '#FF0000'
        input.style.margin = '0 auto'

        let errorElement = document.createElement('div')
        errorElement.classList.add('error')
        errorElement.innerHTML = error

        input.insertAdjacentElement('afterend', errorElement)
    },
    clearErrors: () => {
        let inputs = form.querySelectorAll('input')
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style = ''
        }

        let errorElement = document.querySelectorAll('.error')
        for (let i = 0; i < errorElement.length; i++) {
            errorElement[i].remove()
        }
    }

}

let form = document.querySelector('.form-validator')
form.addEventListener('submit', objValidator.handleSubmit)

// form: () => {
//     const formData = new FormData(this)
//     const searcParams = new URLSearchParams(formData)

//     const options = {
//         method: 'post',
//         mode: 'cors',
//         headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') },
//         body: new URLSearchParams(searcParams)
//     }

//     const prontuarioUrl = 'http://localhost:3000/signup'

//     fetch(prontuarioUrl, options)
//        .then(res => {
//            console.log(res)
//        })
//        .catch(e => e)
    
// }