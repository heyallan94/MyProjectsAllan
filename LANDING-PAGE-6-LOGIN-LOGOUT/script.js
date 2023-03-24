window.addEventListener('load', function() {
    document.getElementById('hidden').style.display='block'
  });

function check(){
    let nome = localStorage.getItem('nome')
    let logoutButton = window.document.querySelector('#logoutButton')
    logoutButton.style.display = 'none'
    if(nome != null){
    logoutButton.style.display = 'block'
    loginProceed()
    }

}

check()


function login(e){    
    let nome = window.document.querySelector('#nome');
    let senha = window.document.querySelector('#senha');
    let resultado = window.document.querySelector('#resultado');
    let inputs = window.document.querySelector('#inputs')
    let logoutButton = window.document.querySelector('#logoutButton')

    if(nome.value === '' && senha.value === ''){
        resultado.textContent = 'Verifique os dados novamente.'
    }else if(nome.value === ''){
        resultado.textContent = 'Digite um nome de usuário.'
    }else if(senha.value === ''){
        resultado.textContent = 'Digite sua senha.'
    }else{
        resultado.textContent = `Seja bem-vindo, ${nome.value}!`
        inputs.style.display = 'none'
        logoutButton.style.display = 'block'
        localStorage.setItem('nome' , nome.value)
        loginProceed()
    }

    //resultado.textContent = `Olá, ${nome.value}`
}

function loginProceed(){
    let loginButton = window.document.querySelector('#loginButton')
    let resultado = window.document.querySelector('#resultado');
    let inputs = window.document.querySelector('#inputs')
    inputs.style.display = 'none'
    resultado.textContent = `Seja bem-vindo, ${localStorage.getItem('nome')}`
    loginButton.style.display = 'none'
}

function logout(e){
    let loginButton = window.document.querySelector('#loginButton')
    let logoutButton = window.document.querySelector('#logoutButton')
    let inputs = window.document.querySelector('#inputs')
    let nome = window.document.querySelector('#nome');
    let senha = window.document.querySelector('#senha');
    logoutButton.style.display = 'none'
    loginButton.style.display = 'block'
    inputs.style.display = 'block'
    let resultado = window.document.querySelector('#resultado');
    resultado.textContent = `Olá!`
    nome.value=''
    senha.value=''
    localStorage.removeItem('nome')


    
}