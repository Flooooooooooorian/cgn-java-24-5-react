import {ChangeEvent, FormEvent, useState} from "react";


type Credentials = {
    username: string,
    password: string
}

export default function HomePage() {

    // const [username, setUsername] = useState<string>("Name")
    // const [password, setPassword] = useState<string>("Name")
    const [credentials, setCredentials] = useState<Credentials>({username: "", password: ""})


    // const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setCredentials({...credentials, username: event.target.value})
    // }
    //
    // const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setCredentials({...credentials, password: event.target.value})
    // }

    const onCredentialsChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log(credentials)
        console.log("username: ", credentials.username)
        console.log("password: ", credentials.password)
    }

    return <>
        <p>This is my HomePage</p>
        <form onSubmit={onSubmit}>
            <label>
                Username:
                <input value={credentials.username}
                       name="username"
                       onChange={onCredentialsChange}/>
            </label>

            <label>
                Passwort:
                <input value={credentials.password}
                       name="password"
                       onChange={onCredentialsChange}/>
            </label>

            <button type="submit">Login</button>
        </form>
    </>
}
