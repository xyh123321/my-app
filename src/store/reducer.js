import { INCREASE, DECREASE } from '../action/Action';

function reducer(state = { value: 0 }, action) {
    switch (action.type) {
        case INCREASE:
            return {...state, value: state.value + 1 }
        case DECREASE:
            return {...state, value: state.value - 1 }
        default:
            return state
    }
}

export default reducer 