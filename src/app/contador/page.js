"use client"

import Title from "@/app/componentes/Title";
import Button from "../componentes/Button";
import { useState } from "react";
import { useEffect } from "react";
import Input from "../componentes/Input";

export default function Contador(){

    const [cuenta, setCuenta] = useState(0)
    const [nombre, setNombre] = useState("")

    useEffect(() => {
        if (cuenta == 13){
            setCuenta(0)
        }
    }, [cuenta])

    function incrementar(){
        setCuenta(cuenta + 1)
    }

    function disminuir(){
        setCuenta(cuenta - 1)
    }

    function check(){
    }

    return(
        <>
            <Title title="Contador"></Title>
            <Input type={"checkbox"} onChange={ver}></Input>
            <Button text={"subir/bajar"}></Button>
        </>
    )
}