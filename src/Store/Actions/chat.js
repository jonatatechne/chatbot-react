export const sendMessage = (message) => {
    return {
        type: 'ENVIA_MENSAGEM',
        payload: { message }
    }    
}