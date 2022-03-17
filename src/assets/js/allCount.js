const p = document.querySelector('.count')


const url = 'https://backend-flavio.herokuapp.com/allcount'

fetch(url,{
    mode: 'cors',
    headers: {
        'authorization': 'bearer ' + localStorage.getItem('token')
    }
})
.then(res => res.json())
.then(data => {
    data.forEach(allCount => {
        p.innerHTML = `Total de prontuarios ${allCount.count}`
    });
})

// const token = localStorage.getItem('token')
// console.log(token, 'to aqui')