//endereco dos campos!
    const button = document.querySelector('button')
   

const addloading = () =>{
    button.innerHTML = '<img src="./assets/loading.png" class="loading">'
}

const removeloading = () =>{
    button.innerHTML = 'Enviar'
    
}

const completesend = () => {
    window.location.href('https://www.instagram.com/com.sagradoamor/', 'blank')
}

//tratando cada campo!
const handlesubmit = (event ) =>{
    event.preventDefault(); 
    addloading()
    const nome = document.querySelector('input[name=nome]').value;
    const sobrenome = document.querySelector('input[name=sobrenome]').value;
    const idade = document.querySelector('#idade').value
    const nascimento = document.querySelector('#dn').value
    const email = document.querySelector('#email').value
    const telefone = document.querySelector('input[name=telefone]').value
    const endereco = document.querySelector('input[name=end]').value
    const intencoes = document.querySelector('textarea[name=intencoes]').value
    const DiaDoPagamento = document.querySelector('#payday').value
    const group = document.querySelector('#grupoinfo').value
    const metodoPagamento = document.querySelector('#methodpay').value

    fetch('https://api.sheetmonkey.io/form/gTYcXgzN75Dc9fYzJhJh2y',{

    method:'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({nome,sobrenome,idade,nascimento,email,telefone,endereco,intencoes,group,DiaDoPagamento,metodoPagamento}),

    }).then(() => removeloading())

    

}


document.querySelector('form').addEventListener('submit',handlesubmit);