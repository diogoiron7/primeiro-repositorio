// Procurar o botão
document.querySelector("#add-time")

// quando clicar
.addEventListener('click', cloneField) // ouvir evento(evento, ação)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // pegou o campo e clonou (Node retorna todo o conteúdo do html referenciado!?)

    // Pegar os campos. Que campos ?
    fields = newFieldContainer.querySelectorAll('input') // pega todas as tag inputs e coloca em fields
    
    // Para cada campo, limpar
    fields.forEach(function (field) {
        // Pegar o field do momento e limpar
        field.value = ""
    })

    // Colocar na página: onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer) // adiciona um "filho"
    
}

    