type Props = {
    increment: () => void
    decrement: () => void 
}
// dump component
export const Buttons = (props: Props) => {
    return (
        <div
        style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "2",
            background: "red"
        }}
        >
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </div>
    )
}
