const INITIAL_STATE = {
    messages: []
}

export default function chat(state = INITIAL_STATE, action = {}) {
    if (action.type === 'ENVIA_MENSAGEM') {
        return {
            messages: [...state.messages, action.payload.message]
        }
    } else {
        return state;
    }
}