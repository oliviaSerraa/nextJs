"use client"

import Form from "@/app/componentes/Form"
import { useState } from "react";

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [mail, setMail] = useState("")

    function cambio1(event) {
        console.log("cambio en el username")
        setUsername(event.target.value)
    }

    function cambio2(event) {
        console.log("cambio en el mail")
        setMail(event.target.value)
    }
    
    function cambio3(event) {
        console.log("cambio en la contraseña")
        setPassword(event.target.value)
    }

    function imprimir1(){
        console.log("username guardado")
        console.log(username)
    }

    function imprimir2(){
        console.log("mail guardado")
        console.log(mail)
    }

    function imprimir3(){
        console.log("contraseña guardada")
        console.log(password)
    }

    return (
        <>
            <h1>Bienvenido al Login</h1>
            <Form 
            title={"Login Form"}
            onClick1={imprimir1} 
            text1={"Aceptar"} 
            onChange1={cambio1}
            onClick2={imprimir2} 
            text2={"Aceptar"} 
            onChange2={cambio2}
            onClick3={imprimir3} 
            text3={"Aceptar"} 
            onChange3={cambio3} 
            >
            </Form>
        </>
    )
}