function nacionalExer(){
    const nacionalidade = prompt("Escreva sua nacionalidade:")

    const listaNacionalidades = [
        "brasileira", 
        "argentina",
        "uruguaia",
        "chilena",
        "colombiana"
    ]

    if(listaNacionalidades.includes(nacionalidade)){
        console.log(nacionalidade)
    } else {
        console.log("Nacionalidade não encontrada")
    }
}

nacionalExer()