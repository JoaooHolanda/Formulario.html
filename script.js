const button = document.querySelector('button')

const addloading = () =>{
    button.innerHTML = '<img src="./assets/loading.png" class="loading">'
}

const removeloading = () =>{
    button.innerHTML = 'Enviar'
}


//tratando cada campo!
const handlesubmit = (event ) =>{
    event.preventDefault();
    addloading()
    //querys
    const nome = document.querySelector('input[name=nome]').value;
    const sobrenome = document.querySelector('input[name=sobrenome]').value;
    const idade = document.querySelector('#idade').value
    const nascimento = document.querySelector('#dn').value
    const email = document.querySelector('#email').value
    const telefone = document.querySelector('input[name=telefone]').value
    const endereco = document.querySelector('input[name=end]').value
    const intencoes = document.querySelector('textarea[name=intencoes]').value


    fetch('https://api.sheetmonkey.io/form/jNfP6bTXqi3RjbUV4JJ3M3',{

    method:'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({nome,sobrenome,idade,nascimento,email,telefone,endereco,intencoes}),

    }).then(() => removeloading())
}


document.querySelector('form').addEventListener('submit',handlesubmit);