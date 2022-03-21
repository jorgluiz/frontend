// FUNÇÃO: SAIR DA PÁFINA


function exitMenuHamburguer() {
    
    const body = document.querySelector('body')

    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    
    const display = body.style.display
    body.style.display = display === 'none' ? 'block' : 'none'
    location.href = '/index.html'
    alert('para entrar novamente faça login')
}