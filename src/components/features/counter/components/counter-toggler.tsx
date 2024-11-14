'use client'

import { Button } from '@/components/ui/button'
import { useCounterContext } from '../counter.context'

export const CounterToggler = () => {
    const { dispatch } = useCounterContext()

    return (
        <div className="flex gap-x-2">
            <Button color="red" onClick={() => dispatch({ type: 'DECREMENT' })}>
                Decrement
            </Button>

            <Button color="blue" onClick={() => dispatch({ type: 'INCREMENT' })}>
                Increment
            </Button>
        </div>
    )
}
