const form = document.querySelector('#formCadastro')

form.onsubmit = function(evento){
    evento.preventDefault()

    const inputEmail = document.forms['formCadastro']['email']
    const span = document.querySelector('#erro')

    let error = false;
    
    if(!inputEmail.value){

        error = true;
        inputEmail.classList.add('inputError')
        span.innerText = "Campo Obrigatorio!"

    } else {
        
        inputEmail.classList.remove('inputError')
        span.innerText = ''
    }

    if (!error){
        form.submit()
    }

}