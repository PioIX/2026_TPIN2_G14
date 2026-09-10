"use client"

import Input from "@/components/Input"


export default function LoginPage() {


    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")


    const onChangeUser = (event) => {

        setUser(event.target.value)


    }

    const onChangePassword = (event) => {

        setPassword(event.target.value)

    }

    return (<>
        <p>Usuario</p>
        <Input onChange={onChangeUser} placeholder={"nombre de usuario"} value={user} type={"text"} />
        <p>Contraseña</p>

        <Input onChange={onChangePassword} placeholder={"contraseña"} value={password} type={"text"} />
    </>)

}