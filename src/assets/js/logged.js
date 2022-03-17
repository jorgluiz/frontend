// VEREFICA SE USER ESTÁ LOGADO 

// const { default: axios } = require("axios")

const tokenStorage = localStorage.getItem('token')
if (!tokenStorage) {
    
    alert('você precisa logar para poder ter acesso ao software, aperte OK')
    document.querySelector('body').style="display: none"
    window.location.href = '/index.html'

}else if(tokenStorage === undefined){
    window.location.href = '/index.html'
}