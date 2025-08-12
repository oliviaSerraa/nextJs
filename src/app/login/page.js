"use client"

import Form from "@/app/componentes/Form"

export default function Login() {

    function cambio1() {
        console.log("cambio en el username")
    }

    function cambio2() {
        console.log("cambio en el mail")
    }
    
    function cambio3() {
        console.log("cambio en la contraseña")
    }


    function imprimir1(){
        console.log("username guardado")
    }

    function imprimir2(){
        console.log("mail guardado")
    }

    function imprimir3(){
        console.log("contraseña guardada")
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