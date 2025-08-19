"use client"

import Title from "@/app/componentes/Title";
import Button from "../componentes/Button";
import { useState } from "react";
import { useEffect } from "react";
import Input from "../componentes/Input";

export default function Contador(){

    const [cuenta, setCuenta] = useState(0)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (cuenta == 20 || cuenta == -20){
            setCuenta(0)
        }
    }, [cuenta])

    function incrementar(){
        setCuenta(cuenta + 1)
    }

    function disminuir(){
        setCuenta(cuenta - 1)
    }

    function ver(event) {
        console.log(event.target.checked)
        setChecked(event.target.checked)
    }

    function check(){
        if(checked == true){
            incrementar()
        } else if(checked == false){
            disminuir()
        }
    }

    function cambioCheck(event){
        setChecked(event.target.checked);
        setColor(event.target.checked == true ? "verde" : "rojo")
    }

    return(
        <>
            <Title title="Contador"></Title>
            <h3>Contador: {cuenta}</h3>
            <Button text={"subir/bajar"} onClick={check} className=""></Button>
            <h3>si el checkbox está marcado INCREMENTA, si no está marcado DISMINUYE</h3>
            <Input type={"checkbox"} onChange={ver}></Input>
            
        </>
    )
}