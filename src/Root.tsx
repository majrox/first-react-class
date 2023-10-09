
// props (argumenty componenty)
type Props = {
    message: string,
    type: "primary" | "secondary"
    numbers: number[]
}
const styles = {
    ul: {
    background: 'yellow',
    color: 'black'
} 
}

export const Root = (props: Props) => {
    return (
    <div style={{
        background: props.type === "primary" ? "blue" : "green", 
        padding: "20px"
        }}>
        <div><h1>{props.message}</h1>
        <hr />

        <input type="text" onChange={(e) => {
            alert(e.target.value)
        }}
        />
        <ul style={styles.ul}>
            {props.numbers.map((n) => (
                <li style={{
                    cursor: "pointer"
                }}
                onClick={() => {
                    console.log("num: ", n)
                }}
                >
                    {n % 2 === 0 ? <b>{n}</b> : <>{n}</>}</li>
            ))}
        </ul>
        </div>
        </div>
    )
}
