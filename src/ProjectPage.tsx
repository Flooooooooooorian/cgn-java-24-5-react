import {useNavigate} from "react-router-dom";

export default function ProjectPage() {

    const navigate = useNavigate()

    return <>
        <p>This is my Project Site</p>
        <ul>
            <li>
                <p>Project XY</p>
                <button onClick={() => {navigate("/projects/xy")}}>
                    Go to Project XY
                </button>
            </li>
            <li>
                <p>Project 123</p>
                <button onClick={() => {navigate("123")}}>
                    Go to Project 123
                </button>
            </li>
            <li>
                <p>Project sfd</p>
                <button onClick={() => {navigate("sfd")}}>
                    Go to Project sfd
                </button>
            </li>
        </ul>
    </>
}
