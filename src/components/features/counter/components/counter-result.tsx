'use client'

import { useCounterContext } from '../counter.context'

export const CounterResult = () => {
    const { state } = useCounterContext()

    return <div className="text-4xl font-bold">{state.count}</div>
}
