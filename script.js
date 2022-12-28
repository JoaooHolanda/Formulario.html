//endereco dos campos!
const button = document.querySelector('button')
   

const addloading = () =>{
    button.innerHTML = '<img src="./assets/loading.png" class="loading">'
}

const removeloading = () =>{
    button.innerHTML = 'Enviar'
    changepage()
    
}

const changepage = () => {
    button.addEventListener("click", redirectFunction());
         
         function redirectFunction(){
             window.location.href = './endpage.html';
 }
 }

//tratando cada campo!
const handlesubmit = (event ) =>{
    event.preventDefault(); 
    addloading()
    const nome = document.querySelector('input[name=nome]').value;
    const sobrenome = document.querySelector('input[name=sobrenome]').value;
    const nascimento = document.querySelector('#dn').value
    const email = document.querySelector('#email').value
    const telefone = document.querySelector('input[name=telefone]').value
    const endereco = document.querySelector('input[name=end]').value
    const group = document.querySelector('#grupoinfo').value
    const instru = document.querySelector('#instru').value
    const dayfree = document.querySelector('#dayfree').value
    const endquest = document.querySelector('#endquest').value

    
    
    
    

    fetch('https://api.sheetmonkey.io/form/vR4BpkotGaK46LY351Cped',{

    method:'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({nome,sobrenome,nascimento,email,telefone,endereco,group,instru,dayfree,endquest}),

    }).then(() => removeloading())  
    
    
    
    

}


document.querySelector('form').addEventListener('submit',handlesubmit);