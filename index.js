function buscarConselho() {
    const url = 'https://api.adviceslip.com/advice'

    let elemento = window.document.getElementById('conselhos');

    elemento.style.padding = '10px'
    
    elemento.innerHTML = 'Carregando...'
    
    fetch(url)
        .then((data) => data.json())
        .then((data) => {
            elemento.innerHTML = data.slip.advice
        })
        .catch((erro) => console.log('Ocorreu algum erro na busca', erro))
}