type ButtonProps = {
    children: React.ReactNode
    color: 'blue' | 'red'
    onClick: () => void
}

export const Button = ({ children, color, onClick }: ButtonProps) => {
    const colors = {
        blue: 'bg-blue-500 hover:bg-blue-700',
        red: 'bg-red-500 hover:bg-red-700',
    }

    return (
        <button className={`rounded px-4 py-2 font-bold text-white ${colors[color]}`} onClick={onClick}>
            {children}
        </button>
    )
}
