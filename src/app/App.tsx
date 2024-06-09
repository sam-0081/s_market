import {Link, Route, Routes} from "react-router-dom";
import {HomePageAsync} from "../pages/HomePage/HomePage.async.tsx";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async.tsx";
import {Suspense} from "react";
import './style/app.scss'


function App() {


    return (
        <div className={''}>
            <Link className={'App'} to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePageAsync/>}/>
                    <Route path="about" element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
