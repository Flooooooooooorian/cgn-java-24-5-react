import './App.css'
import Header from "./Header.tsx";
import HomePage from "./HomePage.tsx";
import ProjectPage from "./ProjectPage.tsx";
import ContactPage from "./ContactPage.tsx";
import {Route, Routes} from "react-router-dom";
import ProjectDetailPage from "./ProjectDetailPage.tsx";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"}
                       element={<HomePage/>}/>
                <Route path={"/projects"}
                       element={<ProjectPage/>}/>
                <Route path={"/projects/:id"}
                       element={<ProjectDetailPage/>}/>
                <Route path={"/contact"}
                       element={<ContactPage/>}/>
                <Route path={"*"}
                       element={<p>Seite nicht gefunden</p>}/>

            </Routes>
        </>
    )
}

export default App
