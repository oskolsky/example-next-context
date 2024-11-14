'use client'

import { Dispatch, createContext, useContext } from 'react'
import { Action, State } from './counter.reducer'

interface ContextProps {
    state: State
    dispatch: Dispatch<Action>
}

export const CounterContext = createContext<ContextProps | undefined>(undefined)

export function useCounterContext(): ContextProps {
    const context = useContext(CounterContext)

    if (!context) {
        throw new Error('useCounterContext must be used within a CounterProvider')
    }

    return context
}
