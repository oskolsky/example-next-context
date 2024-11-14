import { CounterResult } from './components/counter-result'
import { CounterToggler } from './components/counter-toggler'
import { CounterProvider } from './counter.provider'

export const Counter = () => {
    return (
        <CounterProvider>
            <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-9">
                <CounterToggler />
                <CounterResult />
            </div>
        </CounterProvider>
    )
}
