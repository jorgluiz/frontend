

const generate = document.querySelector('#generate')
let output = ''



const options = {
    headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token')
        // 'x-access-token': localStorage.getItem('refresh')
    },
    mode: 'cors',
    cache: 'default',
}

const urlUsers = 'http://localhost:3000/users'

fetch(urlUsers, options)
    .then(res => res.json())
    .then(data => {
        data.map(item => {
            console.log(item)

            output += `
            <form class="flex-column" action="">
            <label for="username">Nome:</label>
            <input type="text" name="username" value="${item.username}">
        
            <label for="email">Email:</label>
            <input name="email" value="${item.email}">

            <label for="admin">Admin:</label>
            <input type="text" name="admin" value="${item.admin}">
            </form>
  
            `;
        })
        generate.innerHTML = output;
    })