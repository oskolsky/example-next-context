'use client'

import { ReactNode, useReducer } from 'react'
import { CounterContext } from './counter.context'
import { initialState, counterReducer } from './counter.reducer'

export const CounterProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}
