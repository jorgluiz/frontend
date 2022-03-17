// objeto validador com métodos (funcionalidades)
let objValidator = {
    handleSubmit: (event) => {
        event.preventDefault()

        const formValue = {
            email: document.querySelector('#signin-email'),
            password: document.querySelector('#signin-password')
        }

        const signin = "https://backend-flavio.herokuapp.com/signin"

        axios.post(signin, {

            email: formValue.email.value,
            password: formValue.password.value
        })
            .then(res => {
                console.log(res.data)
                const token = res.data.accessToken
                console.log(token)
                localStorage.setItem('token', token)

                document.querySelector('.content').style.display = 'none';
                document.querySelector('.box-load').style.display = 'block'



                setTimeout(() => {
                    location.href = '/home.html' 
                }, 2000)
                
            })
            .catch(err => {
                err
                alert('senha ou email incorreto')
            })



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

let form = document.querySelector('.form-signin')
form.addEventListener('submit', objValidator.handleSubmit)