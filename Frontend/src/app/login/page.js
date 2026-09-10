"use client"

import Input from "@/components/Input"
import { useState } from "react"
import Button from "@/components/Button"


export default function LoginPage() {


    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const [EsRegistro, setEsRegistro] = useState(false)
    const [user, setUser] = useState("")


    const onChangeMail = (event) => {

        setMail(event.target.value)


    }
    const onChangePassword = (event) => {

        setPassword(event.target.value)

    }

    const onChangeUser = (event) => {
        setUser(event.target.value)
    }

    const toggleModo = () => {
        setEsRegistro(!EsRegistro)

    }

    const handleLogin = () => {
        alert(`intentando loguearse con: ${mail}, y ${password}`)
    }
    const handleRegister = () => {
        alert(`intentando registrarse con este usuario: ${user} este mail ${mail}: esta contrasena: ${password}`)
    }



    return (
        <>

            {EsRegistro ? (
                <div>
                    <p>Usuario</p>
                    <Input onChange={onChangeUser} placeholder={"Nombre de Usuario"} value={user} type={text} />
                    <p>Email</p>
                    <Input onChange={onChangeMail} placeholder={"email"} value={mail} type={"text"} />
                    <p>Contraseña</p>
                    <Input onChange={onChangePassword} placeholder={"contraseña"} value={password} type={"password"} />
                    <Button onClick={handleRegister} > Registrarse </Button>

                </div>
            ) : (
                <div>

                    <p>Email</p>
                    <Input onChange={onChangeMail} placeholder={"email"} value={mail} type={"text"} />
                    <p>Contraseña</p>
                    <Input onChange={onChangePassword} placeholder={"contraseña"} value={password} type={"password"} />
                    <Button onClick={handleLogin}>Ingresar</Button>

                </div>
            )

            }
        <Button onClick={toggleModo}>
            {EsRegistro ? "Ya tenes cuenta? ingresa" : "Registrate"}
        </Button>

        </>
    )

}