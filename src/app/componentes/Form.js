import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

export default function Form(props){
    return(
        <>
            <Title title={props.title}></Title>
            <h3>Username: </h3>
            <Input onChange={props.onChange1}></Input>
            <Button onClick={props.onClick1} text={props.text1}></Button>
            <h3>Mail: </h3>
            <Input onChange={props.onChange2}></Input>
            <Button onClick={props.onClick2} text={props.text2}></Button>
            <h3>Password: </h3>
            <Input onChange={props.onChange3}></Input>
            <Button onClick={props.onClick3} text={props.text3}></Button>
        </>
    )
}