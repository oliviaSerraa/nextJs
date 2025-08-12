"use client"

import Form from "@/app/componentes/Form"

export default function Ranking() {

    function cambio1() {
        console.log("cambio en el mail")
    }

    function cambio2() {
        console.log("cambio en la contraseña")
    }

    function imprimir1(){
        console.log("mail guardado")
    }

    function imprimir2(){
        console.log("contraseña guardada")
    }

    return (
        <>
            <h1>Bienvenido al Login</h1>
            <Form onClick={imprimir1} text={"Aceptar"} onChange={cambio1} title={"Mail"}></Form>
            <Form onClick={imprimir2} text={"Aceptar"} onChange={cambio2} title={"Contraseña"}></Form>
        </>
    )
}