export default function Input(props) {
    return(
        <>
            <input onChange={props.onChange} type={props.type}></input>
        </>
    )
}