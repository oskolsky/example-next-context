export type State = {
    count: number
}

export type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' }

export const initialState: State = {
    count: 0,
}

export function quartermasterReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }

        case 'DECREMENT':
            return { ...state, count: state.count - 1 }

        default:
            return state
    }
}
