
const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

function counterReducer(state, action) {
    if (action.type === ACTIONS.INCREMENT) {
        return state + 1;
    }
    if (action.type === ACTIONS.DECREMENT) {
        return state - 1;
    }
    if (action.type === ACTIONS.RESET) {
        return 0;
    }
    return state;
}

export { counterReducer, ACTIONS };