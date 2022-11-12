# Frontend Mentor - Base Apparel em breve solução de página

Esta é uma solução para o [desafio da página Base Apparel em breve no Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Índice

- [Visão geral](#visão geral)
  - [O desafio](#the-challenge)
  - [Captura de tela](#captura de tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído com)
  - [O que aprendi](#o-que-aprendi)
- [Autor](#autor)

**Observação: exclua esta nota e atualize o índice com base nas seções que você mantém.**

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Visualize o layout ideal para o site, dependendo do tamanho da tela do dispositivo
- Veja os estados de foco para todos os elementos interativos na página
- Receba uma mensagem de erro quando o `form` for enviado se:
  - O campo `input` está vazio
  - O endereço de e-mail não está formatado corretamente

### Captura de tela

![](./design/mobile-responsive-image.png)

![](./design/desktop-image.png) 

### Links

- URL da solução: [https://github.com/esdrasspessoa/pagina-cadastro-de-email](https://github.com/esdrasspessoa/pagina-cadastro-de-email)
- URL do site ao vivo: [https://esdrasspessoa.github.io/htmlCss/cadastroDeEmail/](https://esdrasspessoa.github.io/htmlCss/cadastroDeEmail/)

## Meu processo

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Flexbox
- CSS Grid
- Responsividade
- SASS
- Javascript

### O que eu aprendi

Com este exercicio pude praticar minhas habilidades com a linguagem sass e javascript. Com o javascript utilizei o basico para fazer a validação do campo email do formulario:

``` js
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
```

## Autor

- Site - [Developed by Bob®](https://esdrasspessoa.github.io/)
- Mentor de frontend - [@esdrasspessoa](https://www.frontendmentor.io/profile/esdrasspessoa)
- Instagram - [@mano_ed2](https://www.instagram.com/mano_ed2/)
- Linkedin - [Esdras](https://www.linkedin.com/in/esdrasspessoa/)



