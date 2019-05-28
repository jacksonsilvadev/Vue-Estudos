export const getNome = state => {
    return state.nome
}

export const getNomeCompleto = state => {
    return state.nome + state.sobrenome
}