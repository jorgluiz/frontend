// FUNÇÃO: SAIR DA PÁFINA

const body = document.querySelector('body')

 function exit() {
     

    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    // localStorage.removeItem('user')

    const display = body.style.display
    body.style.display = display === 'none' ? 'block' : 'none'
    location.href = '/index.html'
    alert('para entrar novamente faça login')
}