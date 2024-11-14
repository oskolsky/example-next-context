'use client'

import { ReactNode, useReducer } from 'react'
import { CounterContext } from './counter.context'
import { initialState, quartermasterReducer } from './counter.reducer'

export const CounterProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(quartermasterReducer, initialState)

    return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}
