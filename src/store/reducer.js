import { INCREASE, DECREASE } from '../action/Action';

function reducer(state = { value: 0 }, action) {
    const value = state.value
    switch (action.type) {
        case INCREASE:
            return { value: value + 1 }
        case DECREASE:
            return { value: value + 1 }
        default:
            return state
    }
}

export default reducer 