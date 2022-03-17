

const urlRefreshToken = 'https://backend-flavio.herokuapp.com/refresh-token'

fetch(urlRefreshToken, {
    headers: { 
        'Authorization': 'bearer ' + localStorage.getItem('token')
        // 'x-access-token': localStorage.getItem('refresh')
     },
     method: 'post',
     mode: 'cors',
     cache: 'default',
})
.then(res => res.json())
.then(token => {
    // console.log('refresh token', token)
    
    localStorage.removeItem('token') // remove token atual (  signin )
    
    const admin = token.admin
    localStorage.setItem('admin', admin)

    const refreshToken = token.accessToken
    localStorage.setItem('token', refreshToken)
})
.catch(err => err)


// setTimeout(() => {

    // const container = document.querySelector('.container')
    // const body = document.querySelector('body')
    // const div = document.createElement('div')
    // div.innerHTML = "sou uma divo estou dentro do setTimeout"

    // container.insertAdjacentElement('beforebegin', div)

//     localStorage.removeItem('token')

// }, 10000)




// setInterval(() => {

//     const container = document.querySelector('.container')
//     const body = document.querySelector('body')
//     const div = document.createElement('div')
//     div.innerHTML = "sou uma divo estou dentro do setTimeout"

//     container.insertAdjacentElement('beforebegin', div)

// }, 1000)