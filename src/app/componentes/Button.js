import styles from "@/app/componentes/Button.module.css"
import clsx from "clsx"

export default function Button(props) {

    return (
        <>
            <button className={
                clsx(
                    {
                        [styles.button] : true
                    }
                )
            }
            onClick={props.onClick}>{props.text}</button>
        </>
    )
    
}