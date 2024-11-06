import {useParams} from "react-router-dom";

export default function ProjectDetailPage() {

    const params = useParams();
    console.log(params.id)

    return <>
        <p>This is {params.id}</p>
    </>
}
